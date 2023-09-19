from import_export import resources
from .models import Household, Personal, Household_Attribute, Personal_Attribute, Attribute_choices_list, Institution, Report

class HouseholdResource(resources.ModelResource):
    class Meta:
        model = Household
class PersonalResource(resources.ModelResource):
    class Meta:
        model = Personal
class Household_AttributeResource(resources.ModelResource):
    class Meta:
        model = Household_Attribute
class Personal_AttributeResource(resources.ModelResource):
    class Meta:
        model = Personal_Attribute
class Attribute_choices_listResource(resources.ModelResource):
    class Meta:
        model = Attribute_choices_list
class InstitutionResource(resources.ModelResource):
    class Meta:
        model = Institution
class ReportResource(resources.ModelResource):
    class Meta:
        model = Report
