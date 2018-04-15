import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import {App} from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public authData: AuthProvider, public alertctlr:AlertController, public app: App) {

  }

  logOutUser(): void {
    this.authData.logoutUser().then((result) => {
      this.app.getRootNav().setRoot(LoginPage);
    }
      
    );
  }

}
