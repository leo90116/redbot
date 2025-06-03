from django.urls import path
from . import views

urlpatterns = [
    path('status/', views.BotStatusView.as_view(), name='bot-status'),
]
