import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simples',
  templateUrl: './simples.component.html',
  styleUrls: ['./simples.component.css']
})
export class SimplesComponent implements OnInit {
  valor: number;
  prazo: number;
  juros = 0.1;
  constructor() {}

  ngOnInit() {}

  getValorFinal() {
    //valorFinal = valor(1 + juros * prazo)
    return this.valor * (1 + this.juros * this.prazo);
  }
}
