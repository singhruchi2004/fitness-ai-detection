from django.contrib import admin
from django.urls import path,include
urlpatterns=[
    path('admin/',admin.site.urls),
    path('',include('ai_app.urls')),#app connect with urls
]