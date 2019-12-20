import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { UserServiceService } from '../services/user-service.service';
import { TrainingService } from '../services/training.service';
import * as firebase from 'firebase';
import { snapshotToArray } from '../environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.page.html',
  styleUrls: ['./battle.page.scss'],
})
export class BattlePage implements OnInit {

  soal: number[] = [1, 2];
  operator;
  score = 0;
  answer: number;
  questionNumber = 0;
  operatorList = ['+', '-', '*', '/'];
  hasil: any;
  items = [];
  userRef = firebase.database().ref('users/');
  constructor(private alertController: AlertController, private userService: UserServiceService,
    private trainingService: TrainingService, private router: Router,
    private toastController: ToastController) {
  }
  uid = this.userService.getUid();
  content = '';

  ngOnInit() {
    this.userRef.on('value', resp => {
      this.items = snapshotToArray(resp);
    });
    this.readMessage();
    this.readRespond();
  }

  async readMessage() {
    var user = await firebase.auth().currentUser;
    if (user) {
      console.log(user);
      return firebase.database().ref('users/' + user.uid).on('value', snapshot => {
        console.log(snapshot.val().messageContent);
        this.content = (snapshot.val() && snapshot.val().messageContent);
        if (this.content == 'received') {
          console.log('recieved');
          this.receiveAlert('You got a battle invitation !', 'Do you want accept it?');
        }
        else if (this.content == 'sent') {
          console.log('sent');
          this.presentAlert('Please wait for your friends !', '');
        }
      });
    }

  }

  async readRespond() {
    var user = await firebase.auth().currentUser;
    if (user) {
      return firebase.database().ref('users/' + user.uid).once('value', snapshot => {
        var invited = (snapshot.val() && snapshot.val().invited);
        firebase.database().ref('rooms/' + invited).once('value', snapshot => {
          var room = (snapshot.val() && snapshot.val().respond);
          if (room == 'true') {
            this.presentAlert('Challange Accepted !', 'Let the battle begin');
            this.showQuestion();
          }
        });
      });
    }

  }

  requestBattle() {
    this.sendAlert('Let\'s battle against your friend !!');
  }

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async receiveAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Yes!',
          handler: data => {
            this.startBattle();
          }
        },
        {
          text: 'No!',
          handler: data => {
            this.cancelBattle();
          },
        },
      ]
    });
    await alert.present();
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  startBattle() {
    var invited, from;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref('users/' + user.uid).on('value', snapshot => {
          invited = (snapshot.val() && snapshot.val().invited);
          from = (snapshot.val() && snapshot.val().messageFrom);
        });
        firebase.database().ref('rooms/' + invited).update({
          respond: 'true',
        });
        firebase.database().ref('users/' + from).update({
          messageContent: 'accepted',
        });
        firebase.database().ref('users/' + user.uid).update({
          messageContent: 'accepted',
        });
      }
    });
  }


  showQuestion() {
    console.log('Score : ' + this.score);
    this.questionNumber++;
    this.soal = this.trainingService.generateQuestionSatuan();
    const operatorPicker = Math.floor(Math.random() * (4 - 0) + 0);
    this.operator = this.operatorList[operatorPicker];
    this.generateAnswer(this.operator);
    return this.soal;
  }

  generateAnswer(operator) {
    if (operator === '+') {
      this.answer = this.soal[0] + this.soal[1];
    } else if (operator === '-') {
      this.answer = this.soal[0] - this.soal[1];
    } else if (operator === 'x') {
      this.answer = this.soal[0] * this.soal[1];
    } else if (operator === '/') {
      this.answer = this.soal[0] / this.soal[1];
    }
    return this.answer;
  }

  nextPage(hasil) {
    console.log('Answer : ' + this.answer);
    console.log('Hasil : ' + hasil);
    if (this.answer == hasil) {
      console.log('Jawaban Benar');
      this.presentToast("Right Answer!");
      this.score++;
    } else {
      console.log("salah jawabannya");
      this.presentToast("Wrong Answer!");
    }
    this.showQuestion();
  }

  async submitAnswer(hasil) {
    firebase.database().ref('users/' + this.uid).update({ messageContent: '' });
    var roomId, finishCount, winner, otherScore, exp, trainingCount, level, player1, player2;
    console.log('Answer : ' + this.answer);
    console.log('Hasil : ' + hasil);
    if (this.answer == hasil) {
      console.log('Jawaban Benar');
      this.presentToast('Right Answer!');
      this.score++;
    } else {
      console.log('Salah jawabannya');
      this.presentToast("Wrong Answer!");
    }
    console.log(this.score);
    await firebase.database().ref('users/' + this.uid).once('value').then(snapshot1 => {
      roomId = (snapshot1.val() && snapshot1.val().invited);
    });
    await firebase.database().ref('/rooms/' + roomId).once('value').then(async snapshot2 => {
      finishCount = (snapshot2.val() && snapshot2.val().finish);
      finishCount++;
      firebase.database().ref('rooms/' + roomId).update({ finish: finishCount });
      winner = (snapshot2.val() && snapshot2.val().winner);
      player1 = (snapshot2.val() && snapshot2.val().player1);
      player2 = (snapshot2.val() && snapshot2.val().player2);
      otherScore = (snapshot2.val() && snapshot2.val().score);
      if (winner != this.uid && otherScore < this.score) {
        firebase.database().ref('rooms/' + roomId).update({ winner: this.uid });
        firebase.database().ref('rooms/' + roomId).update({ score: this.score });
      }
      if (finishCount >= 2) {
        await firebase.database().ref('rooms/' + roomId).once('value').then(snapshot3 => {
          winner = (snapshot3.val() && snapshot3.val().winner);
        });
        await firebase.database().ref('users/' + winner).once('value').then(snapshot4 => {
          exp = (snapshot4.val() && snapshot4.val().xp);
          console.log(exp);
          level = (snapshot4.val() && snapshot4.val().level);
          trainingCount = (snapshot4.val() && snapshot4.val().train_flag);
          exp += 15;
          if (exp >= 100) {
            exp -= 100;
            level++;
            trainingCount = 0;
          }
          if (winner) {
            firebase.database().ref('users/' + winner).update({ xp: exp });
            firebase.database().ref('users/' + winner).update({ train_flag: trainingCount });
            firebase.database().ref('users/' + winner).update({ level: level });
          }
          firebase.database().ref('users/' + player1).update({ messageFrom: '' });
          firebase.database().ref('users/' + player1).update({ invited: '' });
          firebase.database().ref('users/' + player2).update({ messageFrom: '' });
          firebase.database().ref('users/' + player2).update({ invited: '' });
          firebase.database().ref('rooms/' + roomId).update({ respond: 'finished' });
        });
      }
    });
    this.presentAlert('Nice !', 'You just finished the battle. Please wait for your friends !');
    this.router.navigate(['home']);
  }

  cancelBattle() {
    var invited;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        firebase.database().ref('users/' + user.uid).on('value', snapshot => {
          invited = (snapshot.val() && snapshot.val().invited);
        });
        firebase.database().ref('rooms/' + invited).update({
          respond: 'false',
        });
        firebase.database().ref('/users/' + this.uid).update({
          invited: '',
          messageContent: '',
          messageFrom: '',
        });
      }
    });
  }

  async sendAlert(header) {
    const alert = await this.alertController.create({
      header,
      inputs: [
        {
          name: 'nickname',
          type: 'text',
          placeholder: 'Input your friend nickname',
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
            this.battle(data.nickname);
          },
        },

      ]
    });

    await alert.present();

    return alert.inputs;
  }

  battle(nickname) {
    this.items.forEach(element => {
      if (nickname == element.nickname) {
        let masuk = firebase.database().ref('rooms/').push();
        firebase.database().ref('/users/' + element.key).update({
          invited: masuk.key,
          messageContent: 'received',
          messageFrom: this.uid,
        });
        firebase.database().ref('/users/' + this.uid).update({
          invited: masuk.key,
          messageContent: 'sent',
        });
        masuk.set({
          player1: this.uid,
          player2: element.key,
          respond: '',
          winner: '',
          finish: 0,
          score: 0,
        });
      }
    });
  }


}
