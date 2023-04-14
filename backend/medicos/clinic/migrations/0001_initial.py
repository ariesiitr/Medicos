# Generated by Django 3.2.6 on 2023-04-14 18:31

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
                ('chemistName', models.CharField(max_length=50)),
                ('shopAddress', models.CharField(max_length=100)),
                ('upiId', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=30)),
                ('confirmPassword', models.CharField(max_length=30)),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Clinic',
            },
        ),
    ]
