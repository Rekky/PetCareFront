import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './auth/reset-password/reset-password.component';
import {AuthGuard} from '../shared/services/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: NewUserComponent},
  // auth
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'forgot-pass', component: ForgotPasswordComponent},
  {path: 'reset-pass', component: ResetPasswordComponent},
  // redirects
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
