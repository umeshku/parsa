from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Household, Personal, Household_Attribute, Personal_Attribute, Attribute_choices_list, Institution, Report
from django.contrib.auth.models import User
class HouseholdSerializer(serializers.ModelSerializer):
    class Meta:
        model=Household
        fields = '__all__'
class PersonalSerializer(serializers.ModelSerializer):
    class Meta:
        model=Personal
        fields = '__all__'
class Household_AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Household_Attribute
        fields = '__all__'

class Personal_AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personal_Attribute
        fields = '__all__'
class Attribute_choices_listSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribute_choices_list
        fields = '__all__'
class InstitutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Institution
        fields = '__all__'
class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username','password')
        extra_kwargs={'password':{'write_only':True,'required': True}}
    def create (self, validate_data):
        user=User.objects.create_user(**validate_data)
        Token.objects.create(user=user)
        return user
