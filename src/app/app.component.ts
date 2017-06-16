import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

private counter = 0;
private addItem(name,date){
  console.log("addding");
  this.db.database.ref('/items/'+this.guid()).set({
    name:name,
    dateCron: date.toString()
  });
  this.counter+=1;
}

guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
  

}
