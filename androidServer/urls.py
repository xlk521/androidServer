from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
     url(r'^admin/', include(admin.site.urls)),
)

urlpatterns += patterns('',
     url(r'^', include("home.urls")),
)

urlpatterns += patterns('',
     url(r'^', include("login.urls")),
)

urlpatterns += patterns('',
     url(r'^', include("goods.urls")),
)