from rest_framework import serializers

from orders.models.process import Process
from orders.models.task_process import TaskProcess
from orders.serializers.task_process import TaskProcessSerializer

class ProcessSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=250)
    tasks = serializers.SerializerMethodField()

    def get_tasks(self, instance):
        task_process = TaskProcess.objects.filter(process_id=instance.pk)
        return TaskProcessSerializer(task_process, many=True).data



    class Meta:
        model = Process
        fields = ['pk', 'name', 'order','tasks']