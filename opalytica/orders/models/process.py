from django.db import models
from .order import Order


class Process(models.Model):

    # Choice definitions
    MAKE_CAP = 'MAKE_CAP'
    MAKE_BOTTLE = 'MAKE_BOTTLE'
    SEAL = 'SEAL'

    PROCESS_NAME_CHOICES = [
        (MAKE_CAP, 'make cap'),
        (MAKE_BOTTLE, 'make bottle'),
        (SEAL, 'seal'),
    ]

    # Definitions Process Model
    name = models.CharField(
        choices=PROCESS_NAME_CHOICES,
        max_length=12,
    )

    order = models.ForeignKey(Order, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
