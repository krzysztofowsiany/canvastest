# -*- coding: utf-8 -*-
# Create your views here.
from django.shortcuts import render_to_response,HttpResponse
from canvastest.home.models import OpisyTestu
from django.template import RequestContext
from canvastest.home.models import Przegladarki
from canvastest.home.models import Systemy
from canvastest.home.models import Wyniki
from canvastest.home.models import Testy
from datetime import datetime
from django.views.decorators.csrf import csrf_protect,csrf_exempt,ensure_csrf_cookie
from django.core.context_processors import csrf

import httpagentparser

def home(request):
	opisy = OpisyTestu.objects.all()
	return render_to_response('testy.html', {'title':'CanvasTest',
						'opisy':opisy})

def updateBrowser(browser,version):
	try:
		return Przegladarki.objects.get(nazwa=browser, wersja =version)
	except Przegladarki.DoesNotExist:
		newbrowser = Przegladarki(nazwa=browser,wersja=version)
		newbrowser.save()
		return newbrowser

def updateSystem(system,version,distro):
	try:
		return Systemy.objects.get(nazwa=system, wersja =version,dystrybucja=distro)

	except Systemy.DoesNotExist:
		newsystem = Systemy(nazwa=system, wersja=version,dystrybucja=distro)
		newsystem.save()
		return newsystem

def insertResults(post):
	result = Wyniki(wynik1 = post.get('wynik1','0'),
		wynik2 = post.get('wynik2','0'),
		wynik3 = post.get('wynik3','0'),
		wynik4 = post.get('wynik4','0'),
		wynik5 = post.get('wynik5','0'),
		wynik6 = post.get('wynik6','0'),
		wynik7 = post.get('wynik7','0'),
		wynik8 = post.get('wynik8','0'),
		wynik9 = post.get('wynik9','0'))
	result.save()

	return result

def insertNewTest(sID, bID, wID, IP):
	test = Testy(ip=IP)
	test.id_przegladarka = bID
	test.id_system = sID
	test.id_wynik = wID
	test.save()
	return test.id

@csrf_exempt
@ensure_csrf_cookie
def add(request):
	if request.is_ajax() and request.method=='POST':
		web = httpagentparser.detect(request.META['HTTP_USER_AGENT'])	
		bID = updateBrowser(web['browser']['name'], web['browser']['version'])

		dist =''
		for key in web['dist']:
			dist+= '%s_' % web['dist'][key]
		ver = ''
		if 'version' in web['os']:
			ver = web['os']['version']
		elif 'version' in web['dist']:
			ver = web['dist']['version']
		
			
		sID = updateSystem(web['os']['name'],'', dist)	
		wID = insertResults(request.POST)	
		tID = insertNewTest(sID, bID,wID, request.META['REMOTE_ADDR'])	
		res = Testy.objects.get(id=tID)
		r_testy = OpisyTestu.objects.all()
		response = {'testID':tID, 'wynik':res, 'opisy':r_testy}
	else:
		response = {'testID':'no post data'}

	return render_to_response('wyniki.html',response, context_instance = RequestContext(request))


