from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('', FileUploadView.as_view()),
    path('persons/', PersonView.as_view()),
    path('persons/<int:pk>', PersonView.as_view()),
    path('persons/one/<int:pk>', OnePersonView.as_view()),
    # re_path(r'^customers/$', person_list),
    # re_path(r'^customers/(?P&lt;pk&gt;[0-9]+)$', person_detail)
]
