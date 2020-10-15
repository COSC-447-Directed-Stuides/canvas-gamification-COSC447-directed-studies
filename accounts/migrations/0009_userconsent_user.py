# Generated by Django 3.0.7 on 2020-10-14 02:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_userconsent'),
    ]

    operations = [
        migrations.AddField(
            model_name='userconsent',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]
