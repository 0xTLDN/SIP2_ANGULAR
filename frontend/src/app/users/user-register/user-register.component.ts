import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { IUser } from '../../model/IUser.interface';
import { UserService } from '../../services/user.service';

// Reactive Form

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  // Form is a class that organise our form
  registrationForm: FormGroup;

  user: IUser;
  userSubmitted: boolean;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    //this.registrationForm = new FormGroup({
    //  userName: new FormControl('Jonh', Validators.required),
    //  email: new FormControl('john@j', [Validators.required, Validators.email]),
    //  password: new FormControl('aaaaa', [Validators.required, Validators.minLength(5)]),
    //  passwordConfirm: new FormControl('aaaaa', [Validators.required, Validators.minLength(5)]),
    //  mobile: new FormControl('0101020203', [Validators.required, Validators.minLength(10)])
    //}, this.passwordMatchingValidator );
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      userName: ['Mohamed', Validators.required],
      email: ['mohamed@derras.com', [Validators.required, Validators.email]],
      password: ['azerty', [Validators.required, Validators.minLength(5)]],
      passwordConfirm: ['azerty', [Validators.required, Validators.minLength(5)]],
      mobile: ['0102030405', [Validators.required, Validators.maxLength(10)]],
    }, {validators: this.passwordMatchingValidator})
  }

  // Custom validator
  passwordMatchingValidator(formGroup: FormGroup): Validators {
    // return null if both password are matching
    // return javascript object if not true
    return formGroup.get('password').value === formGroup.get('passwordConfirm').value ? null : {notmatched: true};
  }

  // Getter methods to call clean the code
  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get passwordConfirm() {
    return this.registrationForm.get('passwordConfirm');
  }

  get mobile() {
    return this.registrationForm.get('mobile');
  }

  onSubmit() {
    this.userSubmitted = true;

    if (this.registrationForm.valid) {
      // Store user to Browser Local Storage /!\ Not to do in real app
      this.userService.addUserToLocalStorage(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
    }
  }

  // Map our user using our getter methods
  userData(): IUser {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

}
