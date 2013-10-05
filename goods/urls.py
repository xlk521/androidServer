#coding=utf8
from django.conf.urls import patterns, include, url


urlpatterns = patterns('goods.views',
                        url(r'^prodect/detail/', "goodsDetail" ,name="goodsDetail"),
                        url(r'^prodect/', "goods" ,name="goods"),
)