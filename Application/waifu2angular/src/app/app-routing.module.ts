import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ModelUploadComponent } from './model-upload/model-upload.component'

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'modelupload', component: ModelUploadComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
