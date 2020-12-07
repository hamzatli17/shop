import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import {map} from 'rxjs/operators' 
import { pipe } from 'rxjs';
//import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }
getCategories(){
  console.log(this.db.list('/categories').valueChanges());
  return  this.db.list('/categories').valueChanges();

}
getAll() { 
  return  this.db.list('/categories').valueChanges();
//   this.db.list(`/recipes`).snapshotChanges().pipe(map(actions => {
//     return actions.map(action => {
//         const $key = action.payload.key;
//         const data = { $key, ...action.payload.val() };
//         return data;
//     });
// }))
 }
}
