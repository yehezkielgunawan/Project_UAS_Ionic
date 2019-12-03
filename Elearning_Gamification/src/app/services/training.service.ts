import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor() { }

  a: number[] = [1, 2];

  generateQuestionSatuan() {
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

  generateQuestionPuluhan() {
    let temp;
    this.a[0] = Math.floor(Math.random() * 1000000 % 100);
    this.a[1] = Math.floor(Math.random() * 1000000 % 100);
    if (this.a[0] < this.a[1]) {
      temp = this.a[0];
      this.a[0] = this.a[1];
      this.a[1] = temp;
    }
    return this.a;
  }

  generateQuestionRatusan() {
    let temp;
    this.a[0] = Math.floor(Math.random() * 1000000 % 1000);
    this.a[1] = Math.floor(Math.random() * 1000000 % 1000);
    if (this.a[0] < this.a[1]) {
      temp = this.a[0];
      this.a[0] = this.a[1];
      this.a[1] = temp;
    }
    return this.a;
  }
}
