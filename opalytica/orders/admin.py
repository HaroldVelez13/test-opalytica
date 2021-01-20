from django.contrib import admin
from orders.models.order import Order
from orders.models.process import Process
from orders.models.task_process import TaskProcess

models_orders = [Order, Process, TaskProcess ]  

# Register your models here.
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass

@admin.register(Process)
class ProcessAdmin(admin.ModelAdmin):
    pass

@admin.register(TaskProcess)
class TaskProcessAdmin(admin.ModelAdmin):
    pass
