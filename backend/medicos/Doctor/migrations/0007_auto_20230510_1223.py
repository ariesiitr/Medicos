# Generated by Django 3.2.6 on 2023-05-10 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Doctor', '0006_auto_20230510_1130'),
    ]

    operations = [
        migrations.AlterField(
            model_name='docappointments',
            name='appointmentDate',
            field=models.CharField(max_length=30, verbose_name='appointmentDate'),
        ),
        migrations.AlterField(
            model_name='docappointments',
            name='appointmentTime',
            field=models.CharField(max_length=30, verbose_name='appointmentTime'),
        ),
    ]