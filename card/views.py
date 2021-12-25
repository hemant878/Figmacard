from django.shortcuts import render,HttpResponse
from .models import Article
from .serializers import ArticleSerializer
from rest_framework import viewsets
from .serializers import ArticleSerializer
from .models import Article
from rest_framework.response import Response





# Create your views here.



class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


    def get(self, request,pk, *args, **kwargs):
        article = Article.objects.all(id=pk)
        serializer = ArticleSerializer(article,pk=pk)
        return Response(serializer.data)
