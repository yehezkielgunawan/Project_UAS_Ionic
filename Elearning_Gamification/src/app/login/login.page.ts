import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { exists } from 'fs';
import { Details } from '../home/home.page';
import { Observable, asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";
  constructor(
    public afAuth: AngularFireAuth,
    public user: UserService,
    public router: Router,
    public alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  async login() {
    const { username, password } = this;
    try {
      // Kind of a hack lalalalla
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)

      if (res.user) {
        this.user.setUser({
          username,
          uid: res.user.uid
        });
        let users: Observable<Details>;

        users = this.user.getUserDetails(this.user.getUID());

        this.presentAlert("Login Successfull", "Welcome Back !", "Here is your dashboard");
        console.log(users);
        this.router.navigate(['/home']);
      }
    } catch (err) {
      console.dir(err);
      this.presentAlert("ERROR!", "", err);
      if (err.code === "auth/user-not-found") {
        this.presentAlert("User not found!", "Wrong password or username", "Please input the right username + password");
        console.log("User not found!");
      }
    }
  }

  async presentAlert(judul: string, subjudul: string, pesan: string) {
    const alert = await this.alertCtrl.create({
      header: judul,
      subHeader: subjudul,
      message: pesan,
      buttons: ['OK']
    });

    await alert.present();
  }

}
