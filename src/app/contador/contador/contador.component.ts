import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <button (click)="acumular(5)">+1</button>
    <button (click)="acumular(-1)">-1</button>
    <span> {{ numero }} </span>

    <h3>
      la base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumularBase(5)">+5</button>
    <button (click)="acumularBase(-5)">-5</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador APP';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }

  sumar() {
    this.numero += 1;
  }

  restar() {
    this.numero -= 1;
  }

  acumularBase(valor: number) {
    this.base += valor;
  }
}
