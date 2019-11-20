import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Score{
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private scoresCollection: AngularFirestoreCollection<Score>;
  private scores: Observable<Score[]>;

  constructor(db : AngularFirestore) { 
    this.scoresCollection = db.collection<Score>('score_training');

    this.scores = this.scoresCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data};
        });
      })
    );
  }

  getScores(){
    return this.scores;
  }

  getScore(id){
    return this.scoresCollection.doc<Score>(id).valueChanges();
  }

}
