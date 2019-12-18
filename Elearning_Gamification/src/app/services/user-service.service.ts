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
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      let user_data = firebase.auth().currentUser;
      firebase.database().ref('users/' + user_data.uid).set({
        email,
        nickname,
        password,
        xp: 0,
        level: 1,
        image: '',
        train_flag: 0,
        messageContent: false,
        messageFrom: '',
      });
      this.router.navigate(['login']);
      console.log('Yay, registered to Firebase!!! HAHAHA');
    } catch (error) {
      console.log(error.message);
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

  getUid() {
    return localStorage.getItem('uid');
  }

  getProfileDetails() {
    var localStorageUid = localStorage.getItem('uid');
    var detailProfile: string[] = [];
    var level;
    firebase.database().ref('/users/' + localStorageUid).once('value').then(snapshot => {
      detailProfile['name'] = snapshot.val().nickname;
      detailProfile['xp'] = snapshot.val().xp;
      detailProfile['image'] = snapshot.val().image;
      level = snapshot.val().level;
      if (level == 1) {
        detailProfile['level'] = 'Newbie';
      } else if (level == 2) {
        detailProfile['level'] = 'Intermediate';
      } else if (level >= 3) {
        detailProfile['level'] = 'Professor';
      }
      detailProfile['pict'] = snapshot.val().picture;
    });
    console.log(detailProfile);
    return detailProfile;
  }

  updateName(name) {
    var localStorageUid = localStorage.getItem('uid');
    firebase.database().ref('/users/' + localStorageUid).update({ nickname: name });
    this.presentAlert('Update Success !', 'You have updated your name');
    this.router.navigate(['home']);
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async inputAlert(header) {
    const alert = await this.alertController.create({
      header,
      inputs: [
        {
          name: 'nickname',
          type: 'text',
          placeholder: 'Input your new nickname',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK !',
          handler: data => {
            this.updateName(data.nickname);
          },
        },

      ]
    });

    await alert.present();

    return alert.inputs;
  }

  setImage(downloadUrl) {
    var localStorageUid = localStorage.getItem('uid');
    firebase.database().ref('/users/' + localStorageUid).update({ image: downloadUrl });
    this.presentAlert('Update Success !', 'You have updated your image');
    this.router.navigate(['home']);
  }
}
