#!/usr/bin/python 
# -*- coding: utf-8 -*-
from django.db import models
from utils.base import BaseModelManager
from django.contrib import admin
from django.forms import ModelForm

class homeTestManager(BaseModelManager):
    pass

class homeTest(models.Model):
    class Meta:
        verbose_name_plural = u"测试用例"
        ordering = ["name"]
        
    uid = models.CharField(u"个人识别码",max_length=64)
    name = models.CharField(u"名称",max_length=128)
    
    objects = homeTestManager()
    
    def __nuicode__(self):
        return self.uid
    
class homeTestAdmin(admin.ModelAdmin):
    list_display = ("uid",)
    
admin.site.register(homeTest, homeTestAdmin)