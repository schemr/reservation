import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { RoomPage } from '../pages/room/room';
import { AuthPage } from '../pages/auth/auth';
import { SettingsPage } from '../pages/settings/settings';
import { LoginComponent } from '../components/login/login';
import { LogoutComponent } from '../components/logout/logout';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DataService } from '../providers/data/data.service';
import { UserService } from '../providers/user/user.service';


const CloudSettings: CloudSettings = {
  'core': {
    'app_id' : 'APP_ID'
  }
};

@NgModule({
  declarations: [
    MyApp,
    RoomPage,
    AuthPage,
    SettingsPage,
    HomePage,
    TabsPage,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(CloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RoomPage,
    AuthPage,
    SettingsPage,
    HomePage,
    TabsPage
  ],
  providers: [
    DataService,
    UserService
  ]
})
export class AppModule {}
