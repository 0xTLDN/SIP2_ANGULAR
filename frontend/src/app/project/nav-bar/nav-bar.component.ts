import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userLoggedIn: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  loggedIn() {
    let userData = [];
    // if user is logged in, return a value otherwise return undefined
    if (localStorage.getItem('userData')) {
      userData = JSON.parse(localStorage.getItem('userData'));
      this.userLoggedIn = JSON.stringify(userData.find(p => p.userName));
    }
    return localStorage.getItem('userData');
  }

  onLogout() {
    // When login out, remove the token
    localStorage.removeItem('userData');
  }

}
