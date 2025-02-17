# Generated by Django 3.0.7 on 2020-10-15 03:59

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0009_userconsent_user"),
    ]

    operations = [
        migrations.AddField(
            model_name="userconsent",
            name="consent",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="userconsent",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
