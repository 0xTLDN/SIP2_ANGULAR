import { Injectable } from '@angular/core';
import { IUser } from '../model/IUser.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  addUserToLocalStorage(user: IUser) {
    let users = [];
    // Check if users is already created and if so get content into our own array
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'))
      // "..." allow an array to expand, add our user to array users 
      users = [user, ...users];
    } else {
      users = [user];
    }

    // user is a json objcet so we have to string it to store it properly.
    localStorage.setItem('Users', JSON.stringify(users));
  }

}


