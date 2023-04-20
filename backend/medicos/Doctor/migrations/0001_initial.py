# Generated by Django 3.2.6 on 2023-04-14 14:02

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('doctorName', models.CharField(max_length=50)),
                ('clinicName', models.CharField(max_length=50)),
                ('contactNo', models.CharField(default='', max_length=50)),
                ('speciality', models.CharField(max_length=50)),
                ('address', models.CharField(max_length=250)),
                ('appointmentstartTime', models.TimeField()),
                ('appointmentendTime', models.TimeField()),
                ('availableDays', models.CharField(max_length=50)),
                ('appointmentFees', models.IntegerField(default=0, verbose_name='fee')),
                ('upiId', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=30)),
                ('confirmPassword', models.CharField(max_length=30)),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Doctor',
            },
        ),
    ]