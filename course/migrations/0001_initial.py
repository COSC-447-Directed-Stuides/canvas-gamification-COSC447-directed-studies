# Generated by Django 3.0.7 on 2020-08-15 05:55

import course.fields
import course.models.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import djrichtextfield.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("contenttypes", "0002_remove_content_type_name"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Question",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(blank=True, max_length=300, null=True),
                ),
                (
                    "text",
                    djrichtextfield.models.RichTextField(blank=True, null=True),
                ),
                ("answer", models.TextField(blank=True, null=True)),
                (
                    "max_submission_allowed",
                    models.IntegerField(blank=True, default=5),
                ),
                (
                    "tutorial",
                    djrichtextfield.models.RichTextField(blank=True, null=True),
                ),
                ("time_created", models.DateTimeField(auto_now_add=True)),
                ("time_modified", models.DateTimeField(auto_now=True)),
                (
                    "difficulty",
                    models.CharField(
                        choices=[
                            ("EASY", "EASY"),
                            ("NORMAL", "MEDIUM"),
                            ("HARD", "HARD"),
                        ],
                        default="EASY",
                        max_length=100,
                    ),
                ),
                ("is_verified", models.BooleanField(default=False)),
                (
                    "author",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
        ),
        migrations.CreateModel(
            name="QuestionCategory",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                ("description", models.TextField()),
                (
                    "parent",
                    models.ForeignKey(
                        blank=True,
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="course.QuestionCategory",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Submission",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("submission_time", models.DateTimeField(auto_now_add=True)),
                ("answer", models.TextField(blank=True, null=True)),
                ("grade", models.FloatField(default=0)),
                ("is_correct", models.BooleanField(default=False)),
                ("is_partially_correct", models.BooleanField(default=False)),
                ("finalized", models.BooleanField(default=False)),
                (
                    "polymorphic_ctype",
                    models.ForeignKey(
                        editable=False,
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="polymorphic_course.submission_set+",
                        to="contenttypes.ContentType",
                    ),
                ),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
        ),
        migrations.CreateModel(
            name="CodeSubmission",
            fields=[
                (
                    "submission_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="course.Submission",
                    ),
                ),
                ("tokens", course.fields.JSONField(default=dict)),
                ("results", course.fields.JSONField(default=dict)),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
            bases=("course.submission",),
        ),
        migrations.CreateModel(
            name="MultipleChoiceSubmission",
            fields=[
                (
                    "submission_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="course.Submission",
                    ),
                ),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
            bases=("course.submission",),
        ),
        migrations.CreateModel(
            name="VariableQuestion",
            fields=[
                (
                    "question_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="course.Question",
                    ),
                ),
                ("variables", course.fields.JSONField(default=dict)),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
            bases=("course.question",),
        ),
        migrations.CreateModel(
            name="UserQuestionJunction",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "random_seed",
                    models.IntegerField(default=course.models.models.random_seed),
                ),
                ("opened_tutorial", models.BooleanField(default=False)),
                ("opened_question", models.BooleanField(default=False)),
                ("tokens_received", models.FloatField(default=0)),
                ("is_solved", models.BooleanField(default=False)),
                ("is_partially_solved", models.BooleanField(default=False)),
                (
                    "question",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="user_junctions",
                        to="course.Question",
                    ),
                ),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="question_junctions",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.AddField(
            model_name="submission",
            name="uqj",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="submissions",
                to="course.UserQuestionJunction",
            ),
        ),
        migrations.AddField(
            model_name="question",
            name="category",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="course.QuestionCategory",
            ),
        ),
        migrations.AddField(
            model_name="question",
            name="polymorphic_ctype",
            field=models.ForeignKey(
                editable=False,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="polymorphic_course.question_set+",
                to="contenttypes.ContentType",
            ),
        ),
        migrations.CreateModel(
            name="JavaQuestion",
            fields=[
                (
                    "variablequestion_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="course.VariableQuestion",
                    ),
                ),
                ("test_cases", course.fields.JSONField(default=dict)),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
            bases=("course.variablequestion",),
        ),
        migrations.CreateModel(
            name="JavaSubmission",
            fields=[
                (
                    "codesubmission_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="course.CodeSubmission",
                    ),
                ),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
            bases=("course.codesubmission",),
        ),
        migrations.CreateModel(
            name="MultipleChoiceQuestion",
            fields=[
                (
                    "variablequestion_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="course.VariableQuestion",
                    ),
                ),
                ("choices", course.fields.JSONField(default=dict)),
                ("visible_distractor_count", models.IntegerField()),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
            bases=("course.variablequestion",),
        ),
        migrations.CreateModel(
            name="ParsonsQuestion",
            fields=[
                (
                    "variablequestion_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="course.VariableQuestion",
                    ),
                ),
                ("lines", course.fields.JSONField(default="[]")),
                ("junit_template", models.TextField()),
                (
                    "additional_file_name",
                    models.CharField(blank=True, default=None, max_length=100, null=True),
                ),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
            bases=("course.variablequestion",),
        ),
        migrations.CreateModel(
            name="ParsonsSubmission",
            fields=[
                (
                    "codesubmission_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="course.CodeSubmission",
                    ),
                ),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
            bases=("course.codesubmission",),
        ),
        migrations.CreateModel(
            name="TokenValue",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("value", models.FloatField()),
                (
                    "difficulty",
                    models.CharField(
                        choices=[
                            ("EASY", "EASY"),
                            ("NORMAL", "MEDIUM"),
                            ("HARD", "HARD"),
                        ],
                        max_length=100,
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="token_values",
                        to="course.QuestionCategory",
                    ),
                ),
            ],
            options={
                "unique_together": {("category", "difficulty")},
            },
        ),
        migrations.CreateModel(
            name="CheckboxQuestion",
            fields=[
                (
                    "multiplechoicequestion_ptr",
                    models.OneToOneField(
                        auto_created=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        parent_link=True,
                        primary_key=True,
                        serialize=False,
                        to="course.MultipleChoiceQuestion",
                    ),
                ),
            ],
            options={
                "abstract": False,
                "base_manager_name": "objects",
            },
            bases=("course.multiplechoicequestion",),
        ),
    ]
