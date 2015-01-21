from django.shortcuts import render,render_to_response
from django.template import RequestContext
from django.db.models import Q, Count
from wwhf.content.models import Article
# Create your views here.



def content(request):
	profile = request.user
	article = Article.objects.get(id=1)

	context = {'article':article}


	return render_to_response('html/content/1.html', context,
				context_instance=RequestContext(request),
					)