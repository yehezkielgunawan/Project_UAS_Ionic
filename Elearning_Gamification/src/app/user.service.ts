import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Details } from './home/home.page';

interface user {
    username: string,
    uid: string
}

@Injectable()
export class UserService {
    private user: user;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private firestore: AngularFirestore
        ) {

    }

    setUser(user: user) {
        this.user = user;
        this.setUserLoggedIn(user);
    }

    setUserLoggedIn(user: user){
        localStorage.setItem('username',user.username);
        localStorage.setItem('uid',user.uid);
    }

    getUserLoggedIn(){
        if (localStorage.getItem('uid')) {
            return localStorage.getItem('uid');
        }
        else {
            return null;
        }
    }

    clearUserLoggedIn(){
        localStorage.clear();
    }

    getUID() {
        if (!this.user) {
            if (this.afAuth.auth.currentUser) {
                const user = this.afAuth.auth.currentUser;
                this.setUser({
                    username: user.email.split('@')[0], //yehez@codedamn.com
                    uid: user.uid
                })
                return user.uid;
            } else {
                throw new Error("User not logged in!");
            }
        } else {
            return this.user.uid;
        }
    }

    getUserDetails(uid: string): AngularFirestoreDocument<Details>{
        return this.firestore.collection('users').doc(uid);
    }


}