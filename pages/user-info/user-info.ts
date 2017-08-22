import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Users } from "../../model/class/user";
import { ChatProvider } from "../../providers/chat/chat";

/**
 * Generated class for the UserInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  user: Users;
  constructor(
    public chatService : ChatProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
    this.user = this.navParams.get('user');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoPage');
  }
  goToChat(){
    this.chatService.initializebuddy(this.user);
    this.navCtrl.push('ChatPage');
  }
}
