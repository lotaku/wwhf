# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import ckeditor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20150121_0434'),
    ]

    operations = [
        migrations.AlterField(
            model_name='object',
            name='body',
            field=ckeditor.fields.RichTextField(null=True, blank=True),
            preserve_default=True,
        ),
    ]
