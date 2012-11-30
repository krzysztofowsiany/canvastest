# file charts.py
from canvastest.home.models import Systemy,Przegladarki,Testy,Wyniki
from django.db.models import Count,Sum
import django
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure
from matplotlib import pyplot as plt
import numpy as npa

def browserpie(request):
	browsers = Przegladarki.objects.values('nazwa').annotate(sum=Count('testy'))
	
	fig = plt.figure()
	DefaultSize = fig.get_size_inches()
	fig.set_size_inches(DefaultSize[0]/2, DefaultSize[1]/2)
	fig.patch.set_alpha(0.0)
	fracs=[]
	labels=[]
	for browser in browsers:
		labels.append(browser['nazwa'].replace(' ','\n'))
		fracs.append(browser['sum'])

	plt.pie(fracs,labels=labels,autopct='%1.1f%%', shadow=True,startangle=0)
		

	canvas=FigureCanvas(fig)
	response=django.http.HttpResponse(content_type='image/png')
	canvas.print_png(response)
	return response



def systempie(request):
	systems = Systemy.objects.values('nazwa').annotate(sum=Count('testy'))
	
	fig = plt.figure()
	DefaultSize = fig.get_size_inches()
	fig.set_size_inches(DefaultSize[0]/2, DefaultSize[1]/2)
	fig.patch.set_alpha(0.0)
	fracs=[]
	labels=[]
	for system in systems:
		labels.append(system['nazwa'].replace(' ','\n'))
		fracs.append(system['sum'])

	plt.pie(fracs,labels=labels,autopct='%1.1f%%', shadow=True,startangle=90)
		
	canvas=FigureCanvas(fig)
	response=django.http.HttpResponse(content_type='image/png')
	canvas.print_png(response)
	return response



def sum_of_results(request):
	wyniki = Testy.objects.values('id_przegladarka__nazwa','id_system__nazwa').annotate(
	wynik1=Sum('id_wynik__wynik1'),
	wynik2=Sum('id_wynik__wynik2'),
	wynik3=Sum('id_wynik__wynik3'),
	wynik4=Sum('id_wynik__wynik4'),
	wynik5=Sum('id_wynik__wynik5'),
	wynik6=Sum('id_wynik__wynik6'),
	wynik7=Sum('id_wynik__wynik7'),
	wynik8=Sum('id_wynik__wynik8'),
	wynik9=Sum('id_wynik__wynik9')
	)
	
	fig = plt.figure()
	DefaultSize = fig.get_size_inches()
	fig.set_size_inches(DefaultSize[0]/2, DefaultSize[1]/2)
	fig.patch.set_alpha(0.0)
	
	canvas=FigureCanvas(fig)
	response=django.http.HttpResponse(content_type='image/png')
	canvas.print_png(response)
	return response
