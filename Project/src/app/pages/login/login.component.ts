import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router, private _formBuilder: FormBuilder) {}
  return() {
    this.router.navigate(['']);
  }
  return2() {
    this.router.navigate(['forgot']);
  }
  return3() {
    this.router.navigate(['cadastro']);
  }

  change() {
    this.router.navigate(['vagas']);
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
}
