import {Injectable} from '@angular/core';

import firebase from 'firebase';
import firebase_config from '../../config'

@Injectable()
export class DataService {
    public db: any;
    public staticData: any;
    public privateData: any;
    constructor() {}

    init() {
      const fbConf = {
        apiKey: firebase_config.apiKey,
        authDomain: firebase_config.authDomain,
        databaseURL: firebase_config.databaseURL,
        storageBucket: firebase_config.storageBucket
      };

      firebase.initializeApp(fbConf);

      this.db = firebase.database().ref('/');
      this.staticData = firebase.database().ref('/static');
      this.privateData = firebase.database().ref('/private');
    }
}