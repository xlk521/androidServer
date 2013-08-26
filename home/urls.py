#coding=utf8
from django.conf.urls import patterns, include, url


urlpatterns = patterns('home.views',
                        url(r'^$', "homeTest" ,name="homeTest"),
                        url(r'^server$', "TestServer" ,name="TestServer"),
)