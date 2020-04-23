import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = environment.api_url;
  public user$: Observable<any>;
  public user: any;

  constructor(private router: Router, private http: HttpClient) {
    this.user = true;
  }

  async signIn(email: string, password: string): Promise<any> {
    const body = {email, password};
    return await this.http.post(this.URL + 'auth/sign-in', body).toPromise();
  }

  async signUp(email: string, username: string, password: string): Promise<any> {
    const body = {email, username, password};
    return await this.http.post(this.URL + 'auth/sign-up', body).toPromise();
  }

  async forgotPassword(email: string): Promise<any> {
    const body = {email};
    return await this.http.post(this.URL + 'auth/forgot-password', body).toPromise();
  }

  async resetPassword(password: string): Promise<any> {
    const body = {password};
    console.log(password);
    return await this.http.post(this.URL + 'auth/reset-password', body).toPromise();
  }

  async signOut(): Promise<any> {
    localStorage.removeItem('projectGeneratorToken');
  }

}
