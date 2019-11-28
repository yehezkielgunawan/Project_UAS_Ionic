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
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async login() {
    const { email, password } = this;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      let userId = firebase.auth().currentUser.uid;
      firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
        var nickname = (snapshot.val() && snapshot.val().nickname);
        this.presentAlert('Welcome ' + nickname, "This is your dashboard!");
        console.log(nickname);
      })
      this.router.navigate(['home']);
      console.log('yay');
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/user-not-found") {
        this.presentAlert("User not found!", "Wrong password or username");
        console.log("User not found!");
      } else {
        this.presentAlert(error.code, error.message);
      }

    }
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }



}
