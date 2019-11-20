import { ScoreService } from './../services/score.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { exists } from 'fs';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  constructor(public db: AngularFirestore, public scoreService: ScoreService) {}
  jumlah: number;
  a: number[] = [1, 2];
  hasil: any;
  score = 0;
  page = 1;

  ngOnInit() {
    this.a = this.randomNumberSatuan();
    this.jumlah = this.penjumlahan(this.a);
  }

  randomNumberSatuan() {
    let temp;
    this.a[0] = Math.floor(Math.random() * 1000000 % 10);
    this.a[1] = Math.floor(Math.random() * 1000000 % 10);
    if (this.a[0] < this.a[1]) {
      temp = this.a[0];
      this.a[0] = this.a[1];
      this.a[1] = temp;
    }
    return this.a;
  }

  penjumlahan(a) {
    this.jumlah = a[0] + a[1];
    return this.jumlah;
  }

  pengurangan(a) {
    this.jumlah = a[0] + a[1];
    return this.jumlah;
  }

  perkalian(a) {
    this.jumlah = a[0] + a[1];
    return this.jumlah;
  }

  pembagian(a) {
    this.jumlah = a[0] + a[1];
    return this.jumlah;
  }

  randomNumberPuluhan() {
    return Math.floor(Math.random() * 1000000 % 100);
  }
  randomNumberRatusan() {
    return Math.floor(Math.random() * 1000000 % 1000);
  }

  kirimhasil(hasil) {
    if (this.jumlah == hasil) {
      this.score++;
    }
    const scores = this.tarikhasil();
    console.log(scores);
    if (scores == null) {
      return this.db.collection('score_training').add({
        score: this.score
      });
    }
    else {
      return this.db.collection('score_training').doc('dOQXV7RUb8f1eyTBFtP5').set({
        score: this.score
      },{merge:true});
    }
  }

  tarikhasil(){
    let scores;
    this.scoreService.getScores().subscribe(res => {
      scores = res;
    });
    return scores.score;
  }

  nextpage(hasil){
    if(this.jumlah == hasil) {
      this.score++;
    }
    this.page++;
    console.log('s : '+this.score);
    console.log('p : '+this.page);
    this.ngOnInit();
  }

}
