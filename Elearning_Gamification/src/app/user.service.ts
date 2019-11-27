import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

interface user {
    username: string,
    uid: string
}

@Injectable()
export class UserService {
    private user: user;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router
        ) {

    }

    setUser(user: user) {
        this.user = user;
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
}