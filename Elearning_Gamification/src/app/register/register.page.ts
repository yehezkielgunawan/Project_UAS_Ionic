import { UserService } from './../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = "";
  nickname: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public afstore: AngularFirestore,
    public user: UserService,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    });
    await alert.present();
  }

  async register() {
    const { username, password, cpassword, nickname} = this;
    if (password != cpassword) {
      this.showAlert("Error!", "Password don't match");
      return console.log("Password don't match!");
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password);
      console.log(res);

      this.afstore.doc(`users/${res.user.uid}`).set({
        username,
        nickname
      });

      this.user.setUser({
        username,
        uid: res.user.uid
      });

      this.presentAlert('Success', 'You are registered');
      this.router.navigate(['/home']);
    } catch (error) {
      console.dir(error);
      this.showAlert('Error', error.message);
    }

  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    });

    await alert.present();
  }

}
