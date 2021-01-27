from rest_framework import serializers
from django.db.models import Sum
from orders.models.process import Process
from orders.models.task_process import TaskProcess
from orders.serializers.task_process import TaskProcessSerializer


class ProcessSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=250)
    tasks = serializers.SerializerMethodField()
    tasks_completed = serializers.SerializerMethodField()
    tasks_process = serializers.SerializerMethodField()

    def get_tasks(self, instance):
        task_process = TaskProcess.objects.filter(process_id=instance.pk)
        return TaskProcessSerializer(task_process, many=True).data

    def get_tasks_completed(self, instance):
        return TaskProcess.objects.filter(process_id=instance.pk, finish_task__isnull=False).aggregate(Sum('quantity')).get('quantity__sum')

    def get_tasks_process(self, instance):
        return TaskProcess.objects.filter(process_id=instance.pk, finish_task__isnull=True).aggregate(Sum('quantity')).get('quantity__sum')
        
    class Meta:
        model = Process
        fields = ['pk', 'name', 'order', 'tasks_completed', 'tasks_process', 'tasks']
