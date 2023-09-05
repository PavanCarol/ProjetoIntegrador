import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private router: Router) {}

  return() {
    this.router.navigate(['login']);
  }
}
