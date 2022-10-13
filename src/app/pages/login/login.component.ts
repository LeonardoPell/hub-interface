import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.scss',
    '../../css/all.css'
  ]
})
export class LoginComponent{

  public loginForm: FormGroup = this.fb.group({
    loginEmail: ['',[Validators.required]],
    loginPass: ['',[Validators.required]],
  });

  public hide = true;

  constructor(
    private fb: FormBuilder,
  ) { }

}
