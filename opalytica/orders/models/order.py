from django.db import models


class Order(models.Model):

    # Definition Order
    quantity = models.PositiveIntegerField(default=0)
    company = models.CharField(max_length=250)

    def __str__(self):
        return self.company
