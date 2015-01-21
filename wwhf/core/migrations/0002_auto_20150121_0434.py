# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='object',
            name='menu_order',
            field=models.IntegerField(default=1, max_length=256, null=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='object',
            name='type_first',
            field=models.IntegerField(default=1, max_length=256, choices=[(1, b'psg'), (2, b'outsourcing-services'), (3, b'emerging-services'), (4, b'etc'), (5, b'about')]),
            preserve_default=True,
        ),
    ]
