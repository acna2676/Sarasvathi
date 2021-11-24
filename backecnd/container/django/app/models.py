from django.db import models


class Member(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.name


class Member2(models.Model):
    name2 = models.CharField(max_length=100)
    age2 = models.IntegerField()

    def __str__(self):
        return self.name
