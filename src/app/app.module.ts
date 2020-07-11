import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SpinnerComponent} from '../shared/components/spinner/spinner.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { MainSearchComponent } from './home/main-search/main-search.component';
import { HeaderComponent } from './header/header.component';
import { NewUserComponent } from './new-user/new-user.component';
import {FooterComponent} from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    SpinnerComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    MainSearchComponent,
    HeaderComponent,
    ResetPasswordComponent,
    NewUserComponent,
    FooterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
