import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { UploadFileComponent } from './main/upload-file/upload-file.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { ManageSubjectsComponent } from './main/manage-subjects/manage-subjects.component';
import { SelectSubjectDirective } from './directives/selectSubject.directive';
import { BaseComponent } from './main/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    RegisterComponent,
    UploadFileComponent,
    MainComponent,
    SidebarComponent,
    ManageSubjectsComponent,
    SelectSubjectDirective,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
