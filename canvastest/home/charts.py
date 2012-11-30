# file charts.py
from canvastest.home.models import Testy,OpisyTestu
def chart(request,id):
	import random   
	import django
	import datetime
	from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
	from matplotlib.figure import Figure
	from matplotlib.dates import DateFormatter
	from matplotlib import pyplot as plt
	import numpy as np
	test = Testy.objects.get(id=id)
	opisy = OpisyTestu.objects.all()

	fig=plt.figure()
	fig.patch.set_facecolor('lightgreen')
	fig.patch.set_alpha(0.0)
	wyniki_testu=[
		test.id_wynik.wynik1,
		test.id_wynik.wynik2,
		test.id_wynik.wynik3,
		test.id_wynik.wynik4,
		test.id_wynik.wynik5,
		test.id_wynik.wynik6,
		test.id_wynik.wynik7,
		test.id_wynik.wynik8,
		test.id_wynik.wynik9,
		]
	max = 0
	for i in wyniki_testu:
		if i>max:
			max=i

	ind =np.arange(9)
	width = 1.0
	plt.bar(ind, wyniki_testu,width,color='green')
	plt.ylabel('czas wykonania [ms]')
	plt.title('Wynikii')
	plt.grid(True)
	plt.xticks(ind+width/2,(
		opisy[0].nazwa.replace(' ','\n'),
		opisy[1].nazwa.replace(' ','\n'),
		opisy[2].nazwa.replace(' ','\n'),
		opisy[3].nazwa.replace(' ','\n'),
		opisy[4].nazwa.replace(' ','\n'),
		opisy[5].nazwa.replace(' ','\n'),
		opisy[6].nazwa.replace(' ','\n'),
		opisy[7].nazwa.replace(' ','\n'),
		""),
		rotation=90)

	plt.yticks(np.arange(0,max*1.1,max/10))
	plt.subplots_adjust(bottom=0.20,top=0.95,left=0.1,right=0.99)
	canvas=FigureCanvas(fig)
	response=django.http.HttpResponse(content_type='image/png')
	canvas.print_png(response)
	return response
