import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';

import firebase from 'firebase';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

import { BookItems } from '../../model/class/bookitem';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  segment_container = 'home';
  isLoading: boolean = true;
  slides = [];
  newBookList = new Array<BookItems>();
  twenty_book = new Array<BookItems>();
  accounts: FirebaseListObservable<any>;
  constructor(
    public angularFireDatabase: AngularFireDatabase,
    public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    // console.log(firebase.auth().currentUser);
    this.angularFireDatabase.list('/slides', { preserveSnapshot: true }).subscribe(data => {
      data.forEach(snapshot => {
        this.slides.push(snapshot.val().photoUrl);
      });
      this.isLoading = false;
    });
  }
  viewBookInfo(book){
    this.navCtrl.push('BookInfoPage',{book : book});
  }
  ngOnInit() {
    this.accounts = this.angularFireDatabase.list('/book-favorite', { preserveSnapshot: true });
    this.accounts.subscribe(data => {
      data.forEach(snapshot => {
        this.newBookList.push(new BookItems(snapshot.val().name, snapshot.val().imgUrl));
      });
    });
    this.angularFireDatabase.list('/twenty-book', { preserveSnapshot: true }).subscribe(data => {
      data.forEach(snapshot => {
        this.twenty_book.push(new BookItems(snapshot.val().name, snapshot.val().photoUrl));
      });
    })

  }
}
