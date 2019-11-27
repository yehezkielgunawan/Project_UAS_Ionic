import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { resolve } from 'url';

export interface Details {
  nickname: string;
  username: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private userService: UserService,
    private afauth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore
  ) { }

  public details: Observable<Details>;

  ngOnInit() {
    this.currentUser();

  }
  currentUser() {
    let user = this.afauth.auth.currentUser;

    if (!user.uid) {
      console.log('Not Logged in! Please login');
      this.router.navigate(['login']);
    } else {

      console.log(user.uid);

      this.details = this.userService.getUserDetails(user.uid).valueChanges();
    }

  }

}
