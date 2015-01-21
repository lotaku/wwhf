# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='parent',
            field=models.ForeignKey(related_name='sup_page', blank=True, to='content.Article', null=True),
            preserve_default=True,
        ),
    ]
