#coding=utf8
from django.http import Http404
from django.shortcuts import render_to_response
from .models import homeTest
from atom.http_core import HttpResponse
import json

def homeTest(request):
    return render_to_response('home/homeTest.html')

def TestServer(request):
#    return render_to_response('home/homeTest.html')
    return HttpResponse(json.dumps({'success':"msg"}))