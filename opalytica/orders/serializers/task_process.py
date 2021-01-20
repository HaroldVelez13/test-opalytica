from rest_framework import serializers

from orders.models.task_process import TaskProcess

class TaskProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskProcess
        fields = '__all__'