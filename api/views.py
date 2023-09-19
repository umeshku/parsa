from django.shortcuts import render
from rest_framework import viewsets,pagination
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import Household, Personal, Household_Attribute, Personal_Attribute, Attribute_choices_list, Institution, Report
from .serializers import UserSerializer, HouseholdSerializer, PersonalSerializer,Household_AttributeSerializer,Personal_AttributeSerializer,\
    Attribute_choices_listSerializer, InstitutionSerializer, ReportSerializer
from django.contrib.auth.models import User
from rest_framework.pagination import LimitOffsetPagination
from django.db.models import Count
from rest_framework import filters  # Import the filters module
from django.db.models import Q
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.
def index(request):
    return render(request, 'index.html')
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class CustomPagination(pagination.LimitOffsetPagination):
    default_limit = 10
    max_limit = 100 
    
searchable_fields = [
    field.name for field in Household._meta.get_fields()
]
class HouseholdViewSet(viewsets.ModelViewSet):
    queryset = Household.objects.all()
    serializer_class = HouseholdSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    pagination_class=CustomPagination
    filterset_fields = ['Ward','id','KEY']
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    search_fields = searchable_fields
    ordering_fields = ['Ward']
    def create(self, request, *args, **kwargs):
        serializer = HouseholdSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
class PersonalViewSet(viewsets.ModelViewSet):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
    pagination_class=CustomPagination
    filterset_fields = ['Ward','id','PARENT_KEY']
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    search_fields = searchable_fields
    ordering_fields = ['Ward']
    def create(self, request, *args, **kwargs):
        serializer = PersonalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
class Household_AttributeViewSet(viewsets.ModelViewSet):
    queryset = Household_Attribute.objects.all()
    serializer_class = Household_AttributeSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

class Personal_AttributeViewSet(viewsets.ModelViewSet):
    queryset = Personal_Attribute.objects.all()
    serializer_class = Personal_AttributeSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

class Attribute_choices_listViewSet(viewsets.ModelViewSet):
    queryset = Attribute_choices_list.objects.all()
    serializer_class = Attribute_choices_listSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
class InstitutionViewSet(viewsets.ModelViewSet):
    queryset = Institution.objects.all()
    serializer_class = InstitutionSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
class ReportViewSet(viewsets.ModelViewSet):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

@api_view()
@permission_classes([AllowAny])
def analysis(request):
    query_params = request.query_params
    model_name = query_params.get('model')
    question = query_params.get('Q')
    ward = query_params.get('ward')
    
    if model_name == 'household':
        if ward is not None and question is not None:
            households = Household.objects.filter(Ward=ward)
            output = households.values(question).annotate(count=Count(question))
        elif ward is None and question is not None:
            output=Household.objects.values(question).annotate(count=Count(question))
        elif ward is not None and question is None:
            output = Household.objects.filter(Ward=ward).count()
        else:
            output = Household.objects.all().count()
        return Response({'result': output})
    elif model_name == 'personal':
        if ward is not None and question is not None:
            persons = Personal.objects.filter(Ward=ward)
            output = persons.values(question).annotate(count=Count(question))
        elif ward is None and question is not None:
           output= Personal.objects.values(question).annotate(count=Count(question))
        elif ward is not None and question is None:
            output = Personal.objects.filter(Ward=ward).count()
        else:
            output = Personal.objects.all().count()
        return Response({'result': output})
    else:
        return Response({'question_number': question})

         



def importData (request):
    print("test")
