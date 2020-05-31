import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './persons/profile/profile.component';
import { ModelUploadComponent } from './model-upload/model-upload.component'
import { PersonListComponent } from './persons/person-list/person-list.component';
import { PersonsComponent } from './persons/persons.component';
import { ModelWebcamComponent } from './model-webcam/model-webcam.component';
// import { SearchpersonsComponent } from './search-persons/search-persons.component';


const routes: Routes = [
  {path: 'modelupload', component: ModelUploadComponent },
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'person', component: PersonsComponent },
  { path: 'add', component: ProfileComponent },
  { path: 'person/upload/:id', component: ModelUploadComponent },
  { path: 'person/webcam/:id', component: ModelWebcamComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
