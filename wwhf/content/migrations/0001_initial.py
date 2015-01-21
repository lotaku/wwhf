# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('object_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='core.Object')),
                ('parent', models.ForeignKey(related_name='sup_page', blank=True, to='content.Article')),
            ],
            options={
            },
            bases=('core.object',),
        ),
        migrations.CreateModel(
            name='Widget',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=256, null=True, blank=True)),
                ('body', models.TextField(null=True, blank=True)),
                ('article', models.ForeignKey(to='content.Article', null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
