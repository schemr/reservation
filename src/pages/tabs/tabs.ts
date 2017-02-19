import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RoomPage } from '../room/room';
import { AuthPage } from '../auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RoomPage;
  tab3Root: any = AuthPage;

  constructor() {

  }
}
