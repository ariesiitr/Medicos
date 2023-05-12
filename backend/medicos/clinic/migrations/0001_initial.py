# Generated by Django 4.1.7 on 2023-05-12 09:16

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Clinic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uniqueId', models.CharField(default='', max_length=50)),
                ('chemistName', models.CharField(default='', max_length=50)),
                ('shopAddress', models.CharField(default='', max_length=100)),
                ('storeName', models.CharField(default='', max_length=100)),
                ('openingTime', models.DateTimeField(blank=True, null=True)),
                ('closingTime', models.DateTimeField(blank=True, null=True)),
                ('upiId', models.CharField(default='', max_length=50)),
                ('password', models.CharField(default='', max_length=30)),
                ('contactNo', models.CharField(default='', max_length=15)),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('authToken', models.CharField(blank=True, max_length=1000, null=True)),
            ],
            options={
                'verbose_name_plural': 'Clinic',
            },
        ),
    ]
