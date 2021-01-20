from django.db import models
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
