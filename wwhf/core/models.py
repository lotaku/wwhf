# encoding: utf-8

from django.db import models
from datetime import datetime
# import django.contrib.auth.models as django_auth
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField
# Create your models here.
def get_default_user(User):
	return User.objects.get(id=1)

class Object(models.Model):
	"Generic wwhf object"
	TYPE_CHOICES = [
		(1,'psg'),
		(2,'outsourcing-services'),
		(3,'emerging-services'),
		(4,'etc'),
		(5,'about'),
		]
	cretor = models.ForeignKey(User,null=True)
	last_updated = models.DateTimeField(auto_now=True)
	date_created = models.DateTimeField(default=datetime.now)

	title = models.TextField(blank=True,null=True)
	# body = models.TextField(blank=True,null=True)
	body = RichTextField(blank=True,null=True)
	brief = models.TextField(blank=True,null=True) # 简介

	bannerImg = models.TextField(blank=True,null=True) # 标题后面的背景图
	type_first = models.IntegerField(max_length=256,choices=TYPE_CHOICES,default=1)
	menu_order = models.IntegerField(max_length=256, default=1,null=True)

	#用挂件处理
	# advantage = models.TextField(blank=True,null=True) #核心优势
	# industries = models.TextField(blank=True,null=True) #适用企业
	# certifications =  models.TextField(blank=True,null=True) #资质
	# award = models.TextField(blank=True,null=True) #公司荣耀




