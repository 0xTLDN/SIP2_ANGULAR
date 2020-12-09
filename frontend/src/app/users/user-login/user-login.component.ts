import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginStatus: boolean;

  constructor(private authenticateService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);

    const token = this.authenticateService.authenticateUser(loginForm.value);
    if (token) {
      this.loginStatus = false;
      // Set a token for further navigation on the website
      localStorage.setItem('userData', JSON.stringify([{ 'token': '123456', 'userName': loginForm.value.userName}]));
      this.router.navigate(['/']);
    } else {
      this.loginStatus = true;
    }
  }
}
