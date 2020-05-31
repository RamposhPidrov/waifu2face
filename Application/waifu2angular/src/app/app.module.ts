import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './persons/profile/profile.component';
import { ModelUploadComponent } from './model-upload/model-upload.component';
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonDetailsComponent } from './persons/person-details/person-details.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonService } from './persons/person.service';
import { HeaderComponent } from './header/header.component';
import { ModelWebcamComponent } from './model-webcam/model-webcam.component';




@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ModelUploadComponent,
    PersonListComponent,
    PersonDetailsComponent,
    PersonsComponent,
    HeaderComponent,
    ModelWebcamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule   
  ],
  providers: [ PersonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
