# Generated by Django 3.0.14 on 2022-12-31 18:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("general", "0011_pageview"),
    ]

    operations = [
        migrations.AlterField(
            model_name="action",
            name="object_type",
            field=models.CharField(
                choices=[
                    ("Button", "Button"),
                    ("Course", "Course"),
                    ("Course Registration", "Course Registration"),
                    ("Event", "Event"),
                    ("Goal", "Goal"),
                    ("Goal Item", "Goal Item"),
                    ("Question", "Question"),
                    ("Submission", "Submission"),
                    ("User", "User"),
                ],
                max_length=100,
                null=True,
            ),
        ),
        migrations.AlterField(
            model_name="action",
            name="verb",
            field=models.CharField(
                choices=[
                    ("Clicked", "Clicked"),
                    ("Completed", "Completed"),
                    ("Created", "Created"),
                    ("Deleted", "Deleted"),
                    ("Delivered", "Delivered"),
                    ("Duplicated", "Duplicated"),
                    ("Edited", "Edited"),
                    ("Evaluated", "Evaluated"),
                    ("Logged In", "Logged In"),
                    ("Logged Out", "Logged Out"),
                    ("Opened", "Opened"),
                    ("Read", "Read"),
                    ("Registered", "Registered"),
                    ("Sent", "Sent"),
                    ("Skipped", "Skipped"),
                    ("Solved", "Solved"),
                    ("Started", "Started"),
                    ("Submitted", "Submitted"),
                    ("Unread", "Unread"),
                    ("Updated", "Updated"),
                    ("Used", "Used"),
                ],
                max_length=100,
            ),
        ),
    ]
