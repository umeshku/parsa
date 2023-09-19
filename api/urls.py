from django.contrib import admin
from django.urls import path, re_path
from rest_framework import routers

from django.conf.urls import include
from .views import HouseholdViewSet,PersonalViewSet,InstitutionViewSet,ReportViewSet, UserViewSet,Household_AttributeViewSet,Personal_AttributeViewSet, Attribute_choices_listViewSet, analysis
from . import views
router= routers.DefaultRouter()
router.register('users',UserViewSet)
router.register('hhatt',Household_AttributeViewSet)
router.register('peratt',Personal_AttributeViewSet)
router.register('choicelist',Attribute_choices_listViewSet)
router.register('household',HouseholdViewSet)
router.register('personal',PersonalViewSet)
router.register('institution',InstitutionViewSet)
router.register('report',ReportViewSet)





urlpatterns = [
     path('', views.index, name='index'),
   re_path('analysis', analysis),
    path('', include(router.urls)),
    
    ]
