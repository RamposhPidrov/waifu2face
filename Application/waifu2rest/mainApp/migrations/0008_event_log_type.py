# Generated by Django 3.0.6 on 2020-06-01 13:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0007_auto_20200601_1718'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='log_type',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
