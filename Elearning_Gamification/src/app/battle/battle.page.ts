import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserServiceService } from '../services/user-service.service';
import { TrainingService } from '../services/training.service';
import * as firebase from 'firebase';
import { snapshotToArray } from '../environment';

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
  constructor(private alertController: AlertController, private userService: UserServiceService, private trainingService: TrainingService) {
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

  readMessage() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        return firebase.database().ref('users/' + user.uid).on('value', snapshot => {
          console.log(snapshot.val().messageContent);
          this.content = (snapshot.val() && snapshot.val().messageContent);
          if (this.content == 'received') {
            console.log('ANJING');
            this.receiveAlert('You got a battle invitation !', 'Do you want accept it?');
          }
          else if (this.content == 'sent') {
            console.log('KUCING');
            this.presentAlert('Please wait for your friends !', '');
          }
        });
      }
    });
  }

  readRespond(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return firebase.database().ref('users/' + user.uid).on('value', snapshot => {
          var invited = (snapshot.val() && snapshot.val().invited);
          firebase.database().ref('rooms/' + invited).on('value', snapshot => {
            var room = (snapshot.val() && snapshot.val().respond);
            if(room == 'true'){
              this.presentAlert('Challange Accepted !', 'Let the battle begin');
            }
          });
        });
      }
    });
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

  startBattle() {
    var invited,from;
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
        })
      }
    });
    this.showQuestion();
  }


  showQuestion() {
    console.log('Score : ' + this.score);
    this.questionNumber++;
    // const uid = firebase.auth().currentUser.uid;
    this.soal = this.trainingService.generateQuestionSatuan();
    const operatorPicker = 0;
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
      this.score++;
    }
    this.ngOnInit();
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
          messageContent: 'false',
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
          finish: '',
          score: 0,
        });
      }
    });
  }


}
