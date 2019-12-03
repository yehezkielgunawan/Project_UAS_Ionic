import { AlertController } from '@ionic/angular';
import { FIREBASE_CONFIG, snapshotToArray } from './../environment';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    let loggedin = localStorage.getItem('uid');
    console.log(loggedin);
    if (loggedin == null) {
      this.router.navigate(['login']);
    }
  }

  async logout() {
    await firebase.auth().signOut().then(function () {
      console.log('Logout from firebase auth')
    }).catch(function (error) {
      console.log(error.message);
    });
    this.router.navigate(['login']);
    localStorage.clear();
    this.presentAlert("You've been logged out!", "");
    console.log('Yay logout!');
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
