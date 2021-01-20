from rest_framework import viewsets
from orders.models.order import Order
from orders.models.process import Process
from orders.models.task_process import TaskProcess
from orders.serializers.order import OrderSerializer
from orders.serializers.process import ProcessSerializer
from orders.serializers.task_process import TaskProcessSerializer

# Create your views here.
class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class ProcessViewSet(viewsets.ModelViewSet):
    queryset = Process.objects.all()
    serializer_class = ProcessSerializer


class TaskProcessViewSet(viewsets.ModelViewSet):
    queryset = TaskProcess.objects.all()
    serializer_class = TaskProcessSerializer
