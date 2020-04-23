import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  formForgotPassword: FormGroup;
  showCheckEmailNotification: boolean = false;
  loaded: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formForgotPassword = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  async sendEmailRecovery() {
    try {
      this.loaded = true;
      await this.authService.forgotPassword(this.formForgotPassword.get('email').value);
      this.showCheckEmailNotification = true;
    } catch (e) {
      console.warn(e);
    } finally {
      this.loaded = false;
    }
  }

  get fc() {
    return this.formForgotPassword.controls;
  }
}
