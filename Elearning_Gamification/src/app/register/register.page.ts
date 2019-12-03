import { UserServiceService } from './../services/user-service.service';
import { FIREBASE_CONFIG } from './../environment';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private userService: UserServiceService) { }

  email: string = "";
  password: string = "";
  nickname: string = "";
  cpassword: string = "";

  ngOnInit() {
  }

  register(email, nickname, password, cpassword) {
    this.userService.register_firebase(email, nickname, password, cpassword);
  }

}
