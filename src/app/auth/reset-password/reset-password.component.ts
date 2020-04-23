import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  formResetPassword: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formResetPassword = new FormGroup({
      newPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  async resetPassword() {
    try {
      await this.authService.resetPassword(this.formResetPassword.get('newPassword').value);
      await this.router.navigateByUrl('/sign-in');
    } catch (e) {
      console.warn(e);
    }
  }

  get fc() {
    return this.formResetPassword.controls;
  }

}
