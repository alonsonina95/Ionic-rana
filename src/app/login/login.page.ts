import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredential } from '../interfaces';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginFormGroup: FormGroup;
  constructor(
    private _router: Router,
    private _loginService: LoginService,
    formBuilder: FormBuilder
  ) { 
    this.loginFormGroup = formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(){
    const logincCredentials: LoginCredential = this.loginFormGroup.value;
    this._loginService.login(logincCredentials)
      .then((authData) => {
        this._router.navigate(["/tabs"]);
        console.log(authData);
      })
      .catch((authError) => {
        console.log("Autho error =>" + authError);
      })
  }

}
