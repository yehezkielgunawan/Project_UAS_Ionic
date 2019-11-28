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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async register(email, nickname, password, cpassword) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      let user_data = firebase.auth().currentUser;
      firebase.database().ref('users/' + user_data.uid).set({
        email,
        nickname,
        password
      });
      this.router.navigate(['login']);
      console.log('Yay, registered to Firebase!!! HAHAHA');
    } catch (error) {
      console.log(error.message);
    }
  }

}
