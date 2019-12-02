import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FIREBASE_CONFIG } from './../environment';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private router: Router, private alertController: AlertController) { }

  async register_firebase(email, nickname, password, cpassword) {
    try {
      if(password != cpassword){
        throw(1);
      }
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      let user_data = firebase.auth().currentUser;
      firebase.database().ref('users/' + user_data.uid).set({
        email,
        nickname,
        password,
        xp : 0,
      });
      this.router.navigate(['login']);
      this.presentAlert("Congratulations!", "You are registered. Let's try to login!");
      console.log('Yay, registered to Firebase!!! HAHAHA');
    } catch (error) {
      if(error == 1){
        this.presentAlert('Register Failed !', 'Password dismatch !!!');
      } else {
        this.presentAlert('Register Failed !', error.message);
        console.log(error.message);
      }
    }
  }

  async login_firebase(email, password) {
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
