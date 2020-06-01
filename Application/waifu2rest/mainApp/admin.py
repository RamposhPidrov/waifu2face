from django.contrib import admin

# Register your models here.
from .models import *

class PersonAdmin(admin.ModelAdmin):
    pass
admin.site.register(Person, PersonAdmin)
admin.site.register(Event, PersonAdmin)
admin.site.register(LogFile, PersonAdmin)
