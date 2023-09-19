from django.contrib import admin
from .resources import HouseholdResource, PersonalResource, Household_AttributeResource, Personal_AttributeResource, Attribute_choices_listResource, InstitutionResource, ReportResource
# from import_export.admin import ImportExportModelAdmin
from .models import Household, Personal, Household_Attribute, Personal_Attribute, Attribute_choices_list, Institution, Report
# Register your models here.
#class HouseholdAdmin (ImportExportModelAdmin):
#     resource_class = HouseholdResource
# admin.site.register(Household,HouseholdAdmin)
# class PersonalAdmin (ImportExportModelAdmin):
#     resource_class = PersonalResource
# admin.site.register(Personal,PersonalAdmin)
# class Household_AttributeAdmin (ImportExportModelAdmin):
#     resource_class = Household_AttributeResource
# admin.site.register(Household_Attribute,Household_AttributeAdmin)
# class Personal_AttributeAdmin (ImportExportModelAdmin):
#     resource_class = Personal_AttributeResource
# admin.site.register(Personal_Attribute,Personal_AttributeAdmin)
# class Attribute_choices_listAdmin (ImportExportModelAdmin):
#     resource_class = Attribute_choices_listResource
# admin.site.register(Attribute_choices_list,Attribute_choices_listAdmin)
# class InstitutionAdmin (ImportExportModelAdmin):
#     resource_class = InstitutionResource
# admin.site.register(Institution,InstitutionAdmin)
# class ReportAdmin (ImportExportModelAdmin):
#     resource_class = ReportResource
# admin.site.register(Report,ReportAdmin)

