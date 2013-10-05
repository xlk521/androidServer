#coding=utf8
from django.http import Http404
from django.shortcuts import render_to_response
from atom.http_core import HttpResponse
import json

def goodsDetail(request):
    return render_to_response('goods/detail.html')

def goods(request):
    return render_to_response('goods/goods.html')