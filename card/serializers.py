from rest_framework import serializers
from .models import Article



class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'




























# class ArticleSerislizer(serializers.Serializer):
#      title = serializers.CharField(max_length = 100)
#      description = serializers.TextField()


# def Create(self, validated_date):
#      return Article.objects.create(validated_date)

# def update(self, instance,validated_data):
#     instance.title = validated_data.get('title',instance.title)  
#     instance.description = validated_data.get('description',instance.description)      
