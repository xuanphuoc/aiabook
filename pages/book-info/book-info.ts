import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookItems } from "../../model/class/bookitem";

/**
 * Generated class for the BookInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-info',
  templateUrl: 'book-info.html',
})
export class BookInfoPage {
  book : BookItems;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
    this.book = this.navParams.get('book');
    console.log(this.book);
  }
  ionViewDidLoad() {
      // console.log(this.book);
  }

}
