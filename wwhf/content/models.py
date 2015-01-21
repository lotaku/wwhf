# encoding: utf-8
from django.db import models
from wwhf.core.models import Object
# Create your models here.



class Article(Object):
	parent = models.ForeignKey("self", blank=True, related_name="sup_page",null=True)

	def __unicode__(self):
		return self.title


class Widget(models.Model):
	title = models.CharField(max_length=256,blank=True,null=True)
	body = models.TextField(blank=True,null=True)
	article = models.ForeignKey(Article,null=True)
