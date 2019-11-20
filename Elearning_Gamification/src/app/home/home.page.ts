import { ScoreService, Score } from './../services/score.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  score: Score[];
  a: Score[];
  public items: Observable<any[]>;


  constructor(public scoreService: ScoreService, public db: AngularFirestore, public loadingController: LoadingController) {}

  ngOnInit() {
    this.scoreService.getScores().subscribe(res => {
      this.score = res;
    });
  }

  async showScore() {
    const loading = await this.loadingController.create({
      message: 'Loading Score...'
    });
    await loading.present();
    this.scoreService.getScores().subscribe(res => {
      loading.dismiss();
      this.score = res;
    });
    return this.score;
  }
}
