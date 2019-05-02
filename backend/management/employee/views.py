from django.shortcuts import render
from rest_framework import viewsets
from . models import Employees
from . serializers import EmployeesSerializers


class EmployeesListViewSet(viewsets.ModelViewSet):
    queryset = Employees.objects.all()
    serializer_class = EmployeesSerializers
