# Generated by Django 2.0 on 2018-04-18 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('winners', '0002_auto_20180327_2333'),
    ]

    operations = [
        migrations.CreateModel(
            name='WindAverage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField()),
                ('speed', models.IntegerField()),
            ],
            options={
                'ordering': ('time',),
            },
        ),
    ]
