# Generated by Django 2.2 on 2019-04-30 04:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employees',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('sur_name', models.CharField(max_length=50)),
                ('user_name', models.CharField(max_length=150)),
                ('age', models.IntegerField(default=0)),
                ('gender', models.CharField(choices=[('F', 'Female'), ('M', 'Male'), ('o', 'Other')], max_length=1)),
                ('country', models.CharField(choices=[('Bangladesh', 'Bangladesh'), ('Pakistan', 'Pakistan'), ('India', 'India')], max_length=150)),
                ('city', models.CharField(max_length=150)),
                ('image_thumb', models.ImageField(default='default.jpg', upload_to='profile_picture')),
            ],
        ),
    ]
