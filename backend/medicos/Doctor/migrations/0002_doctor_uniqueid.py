# Generated by Django 3.2.6 on 2023-04-14 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Doctor', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='uniqueId',
            field=models.CharField(default='', max_length=50),
        ),
    ]
