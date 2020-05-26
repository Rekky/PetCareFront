import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formLogin: FormGroup;
  loaded: boolean = false;
  msgError: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  async login() {
    try {
      this.loaded = true;
      this.msgError = null;
      const response = await this.authService.signIn(this.formLogin.get('email').value, this.formLogin.get('password').value);
      this.authService.setUserToken(response.token);
      await this.router.navigateByUrl('/home');
    } catch (e) {
      console.warn(e.error);
      this.msgError = e.error.msg;
    } finally {
      this.loaded = false;
    }

    this.formLogin.patchValue({password: null});
  }

  get fc() {
    return this.formLogin.controls;
  }

}
