# Generated by Django 4.0.4 on 2022-05-30 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_usr_subtype_usr_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='Complaints',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flat', models.CharField(max_length=100)),
                ('comp', models.CharField(max_length=100)),
            ],
        ),
    ]
