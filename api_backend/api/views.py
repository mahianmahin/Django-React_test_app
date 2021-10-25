from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.views import APIView

from api.models import *
from api.serializers import *


class Api(APIView):
    def get(self, request, format=None, pk=None):
        if pk == None:
            users = UserProfile.objects.all()
            serializer = UserSeriliazer(users, many=True)

            return Response(serializer.data)
        else:
            user = UserProfile.objects.get(id=pk)
            try:
                serializer = UserSeriliazer(user)
            except:
                return Response(
                    {
                        'msg': 'This id does not exist in our database!'
                    }
                )

            return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSeriliazer(data=request.data)
        if serializer.is_valid():
            serializer.save()

            return Response({
                'msg': 'Data saved!'
            })

        else:
            return Response({'msg': 'Something went wrong!'})

    
    def put(self, request, pk, format=None):
        id = pk
        user = UserProfile.objects.get(pk=id)

        serializer = UserSeriliazer(user, data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response({'msg': 'Data updated!'})

        else:
            return Response({'msg': 'Something went wrong!'})

    def delete(self, request, pk, format=None):
        id = pk
        user = UserProfile.objects.get(pk=id)
        user.delete()

        return Response({'msg': 'Data deleted!'})
