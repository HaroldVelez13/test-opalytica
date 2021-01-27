from rest_framework import serializers

from orders.models.task_process import TaskProcess

class TaskProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskProcess
        fields = ['pk','quantity','total_min','init_task','finish_task', 'process']
        read_only_fields = ['total_min', 'init_task', 'pk']