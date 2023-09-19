
from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import include
from django.views.static import serve
from django.conf import settings
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('auth/', obtain_auth_token),
    re_path(r'^media/(?P<path>.*)$', serve,{'document_root':settings.MEDIA_ROOT}), 
    re_path(r'^static/(?P<path>.*)$', serve,{'document_root':settings.STATIC_ROOT}), 
]
