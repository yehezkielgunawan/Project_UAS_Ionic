import { UserServiceService } from './../services/user-service.service';
import { Router } from '@angular/router';
import { FIREBASE_CONFIG } from './../environment';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    public router: Router,
    public alertController: AlertController,
    public userService: UserServiceService
  ) { }

  ngOnInit() {
    let loggedin = localStorage.getItem('uid');
    if (loggedin != null) {
      this.router.navigate(['home']);
    }
  }

  async login(email, password) {
    if (this.userService.login_firebase(email, password)) {
      localStorage.setItem('uid', firebase.auth().currentUser.uid);
    }
    else {
      console.log('GAGAL !');
    }
  }





}
