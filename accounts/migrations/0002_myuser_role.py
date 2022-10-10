# Generated by Django 3.0.1 on 2020-02-17 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="myuser",
            name="role",
            field=models.CharField(
                choices=[("Teacher", "Teacher"), ("Student", "Student")],
                default="Student",
                max_length=100,
            ),
        ),
    ]
