#coding=utf8
from django.http import Http404
from django.shortcuts import render_to_response
from atom.http_core import HttpResponse
import json

def sign(request):
    return render_to_response('login/sign.html')

def login(request):
    return render_to_response('login/login.html')