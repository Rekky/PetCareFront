import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = environment.api_url;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  async getCuidador(id: string): Promise<any> {
    const body = {};
    const httpOptions = {headers: this.authService.getHeaders()};
    return await this.http.post(this.URL + 'cuidadores/' + id, body, httpOptions).toPromise();
  }
}
