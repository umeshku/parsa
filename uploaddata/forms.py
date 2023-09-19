from django import forms
from django.forms import ModelForm


dataset=[
('household','Household Dataset'),
('personal','Personal Dataset'),

]
class importdataform(forms.Form):
    dataset=forms.CharField(label="Choose Data Set", widget=forms.Select(choices=dataset))
    importData=forms.FileField()

