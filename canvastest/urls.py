from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'canvastest.startpage.views.startpage'),
    url(r'^dodaj$', 'canvastest.home.views.add'),
  
    url(r'^wyszukaj$', 'canvastest.search.views.search'),
    url(r'^testy$', 'canvastest.home.views.home'),
    url(r'^charts/simple.png(?P<id>\d+)$', 'canvastest.home.charts.chart'),
    url(r'^charts/browser_pie.png$', 'canvastest.startpage.charts.browserpie'),
    url(r'^charts/system_pie.png$', 'canvastest.startpage.charts.systempie'),
    url(r'^charts/sum_of_results.png$', 'canvastest.startpage.charts.sum_of_results'),
    # url(r'^canvastest/', include('canvastest.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
