# Generated by Django 5.0.2 on 2024-02-29 14:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('member', '0002_memberprofile_remove_member_profile_path'),
    ]

    operations = [
        migrations.RenameField(
            model_name='memberprofile',
            old_name='member_privacy_agree',
            new_name='status',
        ),
    ]