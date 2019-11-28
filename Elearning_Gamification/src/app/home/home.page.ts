import { AlertController } from '@ionic/angular';
import { FIREBASE_CONFIG, snapshotToArray } from './../environment';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  async logout() {
    await firebase.auth().signOut().then(function () {
      console.log('Logout from firebase auth')
    }).catch(function (error) {
      console.log(error.message);
    });
    this.router.navigate(['login']);
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
