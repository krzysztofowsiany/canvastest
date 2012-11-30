# -*- coding: utf-8 -*-
from django.db import models

class OpisyTestu(models.Model):
	nazwa = models.CharField(max_length=100, null=False,blank=False)
	opis = models.TextField(blank=True, null=True)
	skrypt = models.FileField(upload_to='scripts',blank=False, null=False)
	short_name = models.CharField(max_length=20,null=False,blank=False)

	def __unicode__(self):
		return self.nazwa;

class Wyniki(models.Model):
	wynik1 = models.BigIntegerField(null=False)
	wynik2 = models.BigIntegerField(null=False)
	wynik3 = models.BigIntegerField(null=False)
	wynik4 = models.BigIntegerField(null=False)
	wynik5 = models.BigIntegerField(null=False)
	wynik6 = models.BigIntegerField(null=False)
	wynik7 = models.BigIntegerField(null=False)
	wynik8 = models.BigIntegerField(null=False)
	wynik9 = models.BigIntegerField(null=False)

class Przegladarki(models.Model):
	nazwa = models.CharField(max_length=100, null=False)
	wersja = models.CharField(max_length=100, null=False)
	
	def __unicode__(self):
		return self.nazwa+' '+self.wersja 

class Systemy(models.Model):
	nazwa = models.CharField(max_length=100, null=False)
	wersja = models.CharField(max_length=100)
	dystrybucja = models.CharField(max_length=100)
	def __unicode__(self):
		return self.nazwa+' '+self.wersja 

class Testy(models.Model):
	czas = models.DateTimeField(auto_now_add=True,null=False)
	ip = models.IPAddressField(null=False)
	id_system = models.ForeignKey(Systemy, null=False)
	id_przegladarka = models.ForeignKey(Przegladarki, null=False)
	id_wynik = models.ForeignKey(Wyniki, null=False)
