import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ModelUploadComponent } from './model-upload/model-upload.component'
import { PersonListComponent } from './persons/person-list/person-list.component';
import { CreatePersonComponent } from './persons/create-person/create-person.component';
import { PersonsComponent } from './persons/persons.component';
// import { SearchpersonsComponent } from './search-persons/search-persons.component';


const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'modelupload', component: ModelUploadComponent },
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'person', component: PersonsComponent },
  { path: 'add', component: CreatePersonComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
