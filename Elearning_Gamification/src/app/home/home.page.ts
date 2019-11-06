import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items: Observable<any[]>;

  constructor(
    private db: AngularFirestore
  )
  {}

  ngOninit() {

  }

}
