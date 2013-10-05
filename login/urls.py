#coding=utf8
from django.conf.urls import patterns, include, url

urlpatterns = patterns('login.views',
                        url(r'^sign/', "sign" ,name="sign"),
                        url(r'^login/', "login" ,name="login"),
)