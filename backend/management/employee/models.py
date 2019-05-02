from django.db import models

# Create your models here.

class Employees(models.Model):
    """ This is a simple model class for employee. This class will describe about the employee """ 

    Gender = (
        ('F', 'Female'),
        ('M', 'Male'),
        ('o', 'Other'),
    )

    Country = (
        ('Bangladesh', 'Bangladesh'),
        ('Pakistan', 'Pakistan'),
        ('India', 'India'),
    )

    first_name = models.CharField(max_length=50)
    sur_name = models.CharField(max_length=50)
    user_name = models.CharField(max_length=150)
    age = models.IntegerField(default=0)
    gender = models.CharField(max_length=150)
    country = models.CharField(max_length=150)
    city = models.CharField(max_length=150)
    image_thumb = models.ImageField(default='default.jpg', upload_to='profile_picture')

    def __str__(self):
        return self.first_name +' '+ self.sur_name
