import { AlertController } from '@ionic/angular';
import { FIREBASE_CONFIG, snapshotToArray } from './../environment';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  profileDetails: string[] = [];
  constructor(
    private router: Router,
    private alertController: AlertController,
    private userService: UserServiceService
  ) { }


  ngOnInit() {
    var loggedIn = this.userService.getUid();
    if (loggedIn == null) {
      this.router.navigate(['login']);
    }
    this.profileDetails = this.userService.getProfileDetails();
    console.log(this.profileDetails);
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

  async logout() {
    await firebase.auth().signOut().then(function () {
      console.log('Logout from firebase auth')
    }).catch(function (error) {
      console.log(error.message);
    });
    this.router.navigate(['login']);
    localStorage.clear();
    this.presentAlert('Logout Success !', 'Please log in back to use this applications');
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
