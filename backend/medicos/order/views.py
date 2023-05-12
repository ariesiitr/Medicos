from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import Error
from .serializer import OrderSerializer
from .models import Order

@api_view(('GET', 'POST'))
def order_view(request):
    if request.method == 'GET':
        # Logic to handle GET request
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        data = {
            "order": request.data.get("order"),
            "orderTime": request.data.get("orderTime"),
            "chemistAddress": request.data.get("chemistAddress"),
            "status": request.data.get("status"),
        }

        db_entry = OrderSerializer(data=data)
        try:
            db_entry.is_valid(raise_exception=True)
            db_entry.save()
            return Response(data={"success": "data submitted"}, status=status.HTTP_200_OK)
        except Error as e:
            print(e)
            return Response({"Failure": "failure"}, status=status.HTTP_400_BAD_REQUEST)
