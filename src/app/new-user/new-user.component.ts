import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  public login = false;
  public profile = false;
  public modify = false;
  public profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mail: new FormControl(''),
    picture: new FormControl(''),
    date: new FormControl('')
  });

  public user = {
    firstName: 'Gabriel',
    lastName: 'Ramos',
    mail: 'jitvega@gmail.com',
    picture: 'assets/muerte.jpg',
    date: new Date()
  };
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {

  }
  userState(): boolean{
    this.login = true;
    return this.login;
  }
  profileState(): boolean{
    if(this.login === true){
        this.profile = true;
    }
    return this.profile;
  }
  createUser() {
    //console.warn(this.profileForm.value);
    //this.user.firstName = this.profileForm.value.firstName;
    console.log(this.profileForm.value.firstName);
    this.userState();
    this.profileState();
    console.log(this.login);
  }
  modifyUser(){
    this.modify = false;
    this.profile = true;
  }
  modifyButton(){
    this.profile = false;
    this.modify = true;
  }
  get fc() {
    return this.profileForm.controls;
  }
}
