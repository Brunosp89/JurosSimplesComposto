import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composto',
  templateUrl: './composto.component.html',
  styleUrls: ['./composto.component.css']
})
export class CompostoComponent implements OnInit {
  valor: number;
  prazo: number;
  juros = 0.1;
  valorAtual: number;

  constructor() {}

  ngOnInit() {}

  getValorFinal() {
    return (this.valor * (1 + this.juros)) ^ this.prazo;
  }
  //  valorFinal = valor*(1 + juros)^prazo
  getJurosTable() {
    let list: number[] = [];
    for (let i = 1; i <= this.prazo; i++) {
      list.push(this.prazo * i);
    }
    return list;
  }
  /*
  getJuros() {
    return this.valor * ((1 + this.juros) ^ this.prazo) + 1;
  }
  */
}
