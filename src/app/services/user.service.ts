import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, orderBy, query } from '@angular/fire/firestore';
import { User } from '../common/interface/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Collection References
  private userRef = collection(this.firestore, 'users');

  constructor( private firestore: Firestore ) { }

  createUser(user: User){
    return addDoc(this.userRef, user )
  }

  getAllUser(){
    const q = query(this.userRef, orderBy('name', 'asc'));
    return collectionData(q) as Observable<User[]>
  }

}
