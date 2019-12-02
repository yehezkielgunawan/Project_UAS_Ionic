import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { TrainingService } from '../services/training.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  constructor(private trainingService: TrainingService, private router: Router) { }

  soal: number[] = [1, 2];
  operator;
  score = 0;
  answer: number;
  questionNumber = 0;
  operatorList = ['+', '-', '*', '/'];
  hasil: any;
  exp: number = 0;
  localStorageUid;

  ngOnInit() {
    this.showQuestion();
    let loggedin = localStorage.getItem('uid');
    if(loggedin == null){
      this.router.navigate(['login']);
    }
    else {
      this.localStorageUid = loggedin;
    }
  }

  showQuestion() {
    console.log('Score : '+ this.score);
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

  submitTraining(hasil){
    console.log('Answer : ' + this.answer);
    console.log('Hasil : ' + hasil);
    if (this.answer == hasil) {
      console.log('Jawaban Benar');
      this.score++;
    }
    console.log(this.score);
    // const uid = firebase.auth().currentUser.uid;
    if (this.score >= 1) {
      if(this.score == 1) {
        firebase.database().ref('/users/' + this.localStorageUid).once('value').then(snapshot => {
          this.exp = (snapshot.val() && snapshot.val().xp);
          this.exp += 10;
          firebase.database().ref('users/' + this.localStorageUid).update({ xp: this.exp });
        });
      } else {
        firebase.database().ref('/users/' + this.localStorageUid).once('value').then(snapshot => {
          this.exp = (snapshot.val() && snapshot.val().xp);
          this.exp += 5;
          firebase.database().ref('users/' + this.localStorageUid).update({ xp: this.exp });
        });
      }
    }
    }
}

