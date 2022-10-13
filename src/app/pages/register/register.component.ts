import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss',
    '../../css/all.css'
  ]
})
export class RegisterComponent{

  public registerForm: FormGroup = this.fb.group({
    registerName: ['',[Validators.required]],
    registerEmail: ['',[Validators.required]],
    registerPass: ['',[Validators.required]],
    registerConfirmPass: ['',[Validators.required]],
    registerBirthdate: ['',[Validators.required]],
  });

  public hide = true;

  constructor(
    private fb: FormBuilder,
  ) { }

}
