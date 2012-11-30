# -*- coding: utf-8 -*-
# Create your views here.
from django.shortcuts import render_to_response

def startpage(request):
	return render_to_response('startpage.html', {'title':'CanvasTest'})

