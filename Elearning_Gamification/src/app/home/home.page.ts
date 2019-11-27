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
  public isLoggedin = this.userService.getUserLoggedIn();


  ngOnInit() {
    if(!this.isLoggedin){
      this.router.navigateByUrl('login');
    }

    this.currentUser();
  }
  currentUser() {
      this.details = this.userService.getUserDetails(this.isLoggedin).valueChanges();
    }

  }
