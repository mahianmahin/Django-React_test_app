from api import views
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', views.Api.as_view()),
    path('api/users/<int:pk>/', views.Api.as_view())
]
