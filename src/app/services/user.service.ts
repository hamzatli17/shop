import { appUser } from './../models/app-user';
import { AngularFireDatabase , AngularFireObject} from '@angular/fire/database';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { 
    
  }
  save(user:firebase.User ){ 
    this.db.object('/user/'+ user.uid).update({
      name: user.displayName,
      email:user.email 
    }); 
  }
  get(uid:string){
    this.db.object('/user/'+ uid)
  }
}
