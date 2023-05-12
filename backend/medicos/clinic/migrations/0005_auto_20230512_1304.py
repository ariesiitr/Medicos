# Generated by Django 3.2.6 on 2023-05-12 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clinic', '0004_remove_clinic_confirmpassword'),
    ]

    operations = [
        migrations.AddField(
            model_name='clinic',
            name='closingTime',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='clinic',
            name='openingTime',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='clinic',
            name='storeName',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='clinic',
            name='chemistName',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='clinic',
            name='password',
            field=models.CharField(default='', max_length=30),
        ),
        migrations.AlterField(
            model_name='clinic',
            name='shopAddress',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='clinic',
            name='upiId',
            field=models.CharField(default='', max_length=50),
        ),
    ]
