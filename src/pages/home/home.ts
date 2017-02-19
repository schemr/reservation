import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public date: Date;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.date = new Date();
  }
}