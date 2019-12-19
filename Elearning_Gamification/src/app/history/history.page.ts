import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { snapshotToArray } from '../environment';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(private userService: UserServiceService) { }
  historyItems = [];
  myHistory = [];
  roomRef = firebase.database().ref('rooms/');

  uid = this.userService.getUid();
  playerOneName; playerTwoName; winnerName;


  ngOnInit() {
    this.roomRef.on('value', resp => {
      this.historyItems = snapshotToArray(resp);
    });
  }
  
  ionViewWillEnter(){
    this.readMyHistory();
  }

  async readMyHistory() {
    this.historyItems.forEach(async element => {
      if (element.player1 == this.uid || element.player2 == this.uid) {
        console.log(element);
        await firebase.database().ref('users/' + element.player1).once('value', snapshot => {
          this.playerOneName = (snapshot.val() && snapshot.val().nickname);
        });
        await firebase.database().ref('users/' + element.player2).once('value', snapshot => {
          this.playerTwoName = (snapshot.val() && snapshot.val().nickname);
        });
        await firebase.database().ref('users/' + element.winner).once('value', snapshot => {
          this.winnerName = (snapshot.val() && snapshot.val().nickname);
        });
        let data = {
          player1: this.playerOneName,
          player2: this.playerTwoName,
          winner: this.winnerName
        };
        console.log(data);
        console.log('1');
        this.myHistory.push(data);
      }
    });
  }

}
