from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class BotStatusView(APIView):
    """
    API endpoint that returns the status of the Redbot.
    For now, returns a dummy status. Replace with real logic as needed.
    """
    def get(self, request):
        # TODO: Integrate with actual Redbot status
        data = {
            "online": True,
            "message": "Redbot is running!",
            "cogs_loaded": ["Admin", "Fun", "Moderation"],
            "uptime": "1 day, 2 hours, 30 minutes"
        }
        return Response(data, status=status.HTTP_200_OK)
