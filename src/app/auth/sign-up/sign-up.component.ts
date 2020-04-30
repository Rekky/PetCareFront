import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formRegister: FormGroup;
  loaded: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      repeatPassword: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    });
  }

  async register(): Promise<void> {
    try {
      this.loaded = true;
      await this.authService.signUp(
        this.formRegister.get('email').value,
        this.formRegister.get('username').value,
        this.formRegister.get('password').value
      );
      this.showRegisterCompleted();
    } catch (e) {
      console.warn(e);
    } finally {
      this.loaded = false;
    }
  }

  showRegisterCompleted(): void {
    this.router.navigateByUrl('/sign-in');
  }

  get fc() {
    return this.formRegister.controls;
  }

}
