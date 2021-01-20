# Generated by Django 3.1.5 on 2021-01-19 19:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=0)),
                ('company', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Process',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('MAKE_CAP', 'make cap'), ('MAKE_BOTTLE', 'make bottle'), ('SEAL', 'seal')], max_length=12)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.order')),
            ],
        ),
        migrations.CreateModel(
            name='TaskProcess',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=0)),
                ('total_min', models.PositiveIntegerField(default=0)),
                ('init_task', models.DateTimeField(auto_now_add=True)),
                ('finish_task', models.DateTimeField()),
                ('process', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.process')),
            ],
        ),
    ]
