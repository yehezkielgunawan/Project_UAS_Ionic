import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService } from '../services/training.service';
import * as firebase from 'firebase';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  constructor(private router: Router, private trainingService: TrainingService, private alertController: AlertController) { }

  soal: number[] = [1, 2];
  operator;
  score = 0;
  answer: number;
  questionNumber = 0;
  operatorList = ['+', '-', '*', '/'];
  hasil: any;
  exp: number = 0;
  level: number = 0;
  localStorageUid;

  ngOnInit() {
    this.showQuestion();
    let loggedin = localStorage.getItem('uid');
    if (loggedin == null) {
      this.router.navigate(['login']);
    }
    else {
      this.localStorageUid = loggedin;
    }
  }

  showQuestion() {
    console.log('Score : ' + this.score);
    this.questionNumber++;
    // const uid = firebase.auth().currentUser.uid;
    let xp;
    firebase.database().ref('/users/' + this.localStorageUid).once('value').then(snapshot => {
      xp = (snapshot.val() && snapshot.val().xp);
      if (xp <= 100) {
        this.soal = this.trainingService.generateQuestionSatuan();
        const operatorPicker = 0;
        this.operator = this.operatorList[operatorPicker];
      } else if (xp <= 200) {
        this.soal = this.trainingService.generateQuestionPuluhan();
        const operatorPicker = Math.floor(Math.random() * (2 - 0) + 0);
        this.operator = this.operatorList[operatorPicker];
      } else if (xp <= 300) {
        this.soal = this.trainingService.generateQuestionRatusan();
        const operatorPicker = Math.floor(Math.random() * (4 - 0) + 0);
        this.operator = this.operatorList[operatorPicker];
      }
      this.generateAnswer(this.operator);
      return this.soal;
    });
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

  submitTraining(hasil) {
    console.log('Answer : ' + this.answer);
    console.log('Hasil : ' + hasil);
    if (this.answer == hasil) {
      console.log('Jawaban Benar');
      this.score++;
    }
    console.log(this.score);
    // const uid = firebase.auth().currentUser.uid;
    if (this.score >= 1) { //tambah jadi 5
      if (this.score == 1) { //tambah jadi 10
        firebase.database().ref('/users/' + this.localStorageUid).once('value').then(snapshot => {
          var trainingCount = (snapshot.val() && snapshot.val().train_flag);
          console.log(trainingCount);
          if (trainingCount < 3) {
            console.log('MASUK COK !');
            this.exp = (snapshot.val() && snapshot.val().xp);
            this.level = (snapshot.val() && snapshot.val().level);
            this.exp += 10;
            trainingCount++;
            if (this.exp >= 100) {
              this.exp -= 100;
              this.level++;
              trainingCount = 0;
            }
            firebase.database().ref('users/' + this.localStorageUid).update({ xp: this.exp });
            firebase.database().ref('users/' + this.localStorageUid).update({ train_flag: trainingCount });
            firebase.database().ref('users/' + this.localStorageUid).update({ level: this.level });
            this.presentAlert('Training Done', 'You get 10 experiences');
          }
          else {
            this.presentAlert('Training Done', 'You get nothing because of training limit ! Please Battle with your friends');
          }
        });
      } else {
        firebase.database().ref('/users/' + this.localStorageUid).once('value').then(snapshot => {
          var trainingCount = (snapshot.val() && snapshot.val().train_flag);
          if (trainingCount < 3) {
            this.exp = (snapshot.val() && snapshot.val().xp);
            this.exp += 5;
            trainingCount++;
            if (this.exp >= 100) {
              this.exp -= 100;
              this.level++;
              trainingCount = 0;
            }
            firebase.database().ref('users/' + this.localStorageUid).update({ xp: this.exp });
            firebase.database().ref('users/' + this.localStorageUid).update({ train_flag: trainingCount });
            firebase.database().ref('users/' + this.localStorageUid).update({ level: this.level });
            this.presentAlert('Training Done', 'You get 5 experiences');
          } else {
            this.presentAlert('Training Done', 'You get nothing because of training limit ! Please battle with your friends');
          }
        });
      }
    }
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
}
