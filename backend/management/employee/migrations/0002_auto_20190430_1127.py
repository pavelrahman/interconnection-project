# Generated by Django 2.2 on 2019-04-30 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employees',
            name='country',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='employees',
            name='gender',
            field=models.CharField(max_length=150),
        ),
    ]