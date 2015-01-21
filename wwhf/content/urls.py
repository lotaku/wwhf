from django.conf.urls import patterns, include, url



urlpatterns = patterns('wwhf.content.views',
    # Examples:
    # url(r'^$', 'wwhf.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^1/', 'content',name='content'),

)
