from rest_framework import serializers

from orders.models.order import Order
from orders.models.process import Process
from orders.serializers.process import ProcessSerializer

class OrderSerializer(serializers.ModelSerializer):
    process = serializers.SerializerMethodField()
    company = serializers.CharField(max_length=250)

    def create(self, validated_data):
        instance = Order.objects.create(**validated_data)
        Process.objects.create(order=instance, name='MAKE_CAP')
        Process.objects.create(order=instance, name='MAKE_BOTTLE')
        Process.objects.create(order=instance, name='SEAL')
        return instance

    def get_process(self, instance):
        process = Process.objects.filter(order_id=instance.pk)
        return ProcessSerializer(process, many=True).data


    class Meta:
        model = Order
        fields = ['pk', 'company','quantity', 'process']