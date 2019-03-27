import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { ManageSubjectsComponent } from './main/manage-subjects/manage-subjects.component';
import { UploadFileComponent } from './main/upload-file/upload-file.component';
import { BaseComponent } from './main/base/base.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', component: BaseComponent, pathMatch: 'full' },
      { path: 'manage', component: ManageSubjectsComponent },
      { path: 'subject/:id', component: UploadFileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
