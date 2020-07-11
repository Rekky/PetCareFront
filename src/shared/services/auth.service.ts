import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = environment.api_url;
  public user$: Subject<any> = new Subject<any>();
  public user: any;
  public isLoggedInSubject$ = new Subject<any>();

  constructor(private router: Router, private http: HttpClient) {
    this.user = true;
  }

  async signIn(email: string, password: string): Promise<any> {
    const body = {email, password};
    const httpOptions = {headers: this.getHeaders()};
    return await this.http.post(this.URL + 'users/sign-in', body, httpOptions).toPromise().then((response: any) => {
      if (response) {
        this.setUserToken(response.token);
        this.isLoggedInSubject$.next(true);
      }
    });
  }

  async signUp(email: string, username: string, password: string): Promise<any> {
    const body = {email, username, password};
    return await this.http.post(this.URL + 'users/sign-up', body).toPromise();
  }

  async forgotPassword(email: string): Promise<any> {
    const body = {email};
    return await this.http.post(this.URL + 'users/forgot-password', body).toPromise();
  }

  async resetPassword(password: string): Promise<any> {
    const body = {password};
    console.log(password);
    return await this.http.post(this.URL + 'users/reset-password', body).toPromise();
  }

  isLoggedIn(): Observable<any> {
    return new Observable<any>((observer: any) => {
      // this.http.get(this.publicApiUrl + 'user',
      //   {
      //     params: new HttpParams()
      //       .set('storefront_id', this.storefrontId),
      //     headers: this.getHeaders(),
      //     observe: 'response'
      //   })
      //   .pipe( catchError(err => this.catchError(err) ))
      //   .subscribe( (response:HttpResponse<UserResponse>) => {
      //
      //   });
      if (this.getUserToken()){
        this.isLoggedInSubject$.next(true);
        observer.next(true);
        observer.complete();
      } else {
        this.isLoggedInSubject$.next(false);
        observer.next(false);
        observer.complete();
      }
    });
  }

  getHeaders(): HttpHeaders | null {
    if (this.getUserToken() && this.getUserToken() != null) {
      return new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.getUserToken())
        .set('Content-Type', 'application/json');
    } else {
      return null;
    }
  }

  setUserToken(token): void {
    localStorage.setItem('token', token);
  }

  getUserToken(): string {
    return localStorage.getItem('token');
  }

  async signOut(): Promise<any> {
    this.isLoggedInSubject$.next(false);
    await localStorage.removeItem('token');
  }

}
