# Generated by Django 3.0.14 on 2021-12-04 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("course", "0021_userquestionjunction_is_favorite"),
    ]

    operations = [
        migrations.AlterField(
            model_name="question",
            name="difficulty",
            field=models.CharField(
                choices=[
                    ("EASY", "Easy"),
                    ("MEDIUM", "Medium"),
                    ("NORMAL", "Normal"),
                    ("HARD", "Hard"),
                ],
                default="EASY",
                max_length=100,
            ),
        ),
        migrations.AlterField(
            model_name="tokenvalue",
            name="difficulty",
            field=models.CharField(
                choices=[
                    ("EASY", "Easy"),
                    ("MEDIUM", "Medium"),
                    ("NORMAL", "Normal"),
                    ("HARD", "Hard"),
                ],
                max_length=100,
            ),
        ),
    ]
