from django.db import models
from tinymce.models import HTMLField


# Create your models here.




class Article(models.Model):
    name = models.CharField(max_length = 100 )
    location = models.CharField(max_length = 100 , null=True)
    company = models.CharField(max_length = 100 , null=True)
    title = models.CharField(max_length = 100)
    subtitle =HTMLField(blank=True)
    education = HTMLField(blank=True)
    date = models.CharField(max_length = 100)
    id =models.AutoField( primary_key =True,editable=False)
    rating = models.IntegerField(null=True,blank=True,default=0)
    image =models.ImageField(blank=True,null=True)




    def __str__(self):
        return self.title