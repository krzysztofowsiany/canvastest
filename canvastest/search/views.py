# -*- coding: utf-8 -*-
# Create your views here.
from django.shortcuts import render_to_response
from django.template import RequestContext, Template
from django import forms
from canvastest.home.models import Testy, OpisyTestu
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt,ensure_csrf_cookie
from django.core.exceptions import ObjectDoesNotExist
class SearchForm(forms.Form):
	id_wyniku = forms.CharField(max_length=100,required=True)
	

@csrf_exempt
@ensure_csrf_cookie
def search(request):
	if request.method =='POST':
		form = SearchForm(request.POST)
		if form.is_valid():
			id = form.cleaned_data['id_wyniku']
			try:
				test = Testy.objects.get(id=id)
				opisy = OpisyTestu.objects.all()
			
				response={ 'testID':id, 'wynik':test, 'opisy':opisy }
				context = RequestContext(request, response)
				return render_to_response('wyniki.html',context)
			except ObjectDoesNotExist:
				c = RequestContext(request, {'result':'Wprowadz poprawny identyfikator wyniku'})
				t = Template("{{result}}")
				return  HttpResponse(t.render(c))

	else:
		form = SearchForm()
		return render_to_response('search.html', {'title':'CanvasTest', 'form':form})



