from django.db import models
from django.db.models.signals import pre_save
from datetime import datetime
from .process import Process


class TaskProcess(models.Model):

    # Definitions Task Process Model
    quantity = models.PositiveIntegerField(default=0)
    total_min = models.PositiveIntegerField(default=0)
    init_task = models.DateTimeField(auto_now_add=True)
    finish_task = models.DateTimeField(blank=True, null=True)

    process = models.ForeignKey(Process, on_delete=models.CASCADE)

    def __str__(self):
        return self.quantity

def calculate_minutes(sender, instance, **kwargs):
    if instance.finish_task and instance.init_task:
        time_delta = (instance.finish_task - instance.init_task)
        total_seconds = time_delta.total_seconds()
        minutes = total_seconds/60
        print(minutes)
        instance.min = int(minutes)
        instance.save()

pre_save.connect(calculate_minutes, sender=TaskProcess)