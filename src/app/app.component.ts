import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-title></app-title>
  <app-data-biding></app-data-biding>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos>
    <h1>Teste de Content 1</h1>
    <h3>Fim Teste de Content 1</h3>
  </app-diretivas-atributos>
  <app-diretivas-atributos>
    <h1>Teste de Content 2</h1>
    <h3>Fim Teste de Content 2</h3>
  </app-diretivas-atributos> 
  <app-header></app-header> 
  <app-input [contador]="addValue"></app-input>
  <br>
  <button (click)="add()">Add</button>
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h1>{{getDados.idade}}</h1>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>-->
  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit{

  public addValue: number = 0;
  
  public getDados: {nome: string, idade: number} | undefined

  ngOnInit(): void {

  }
  
  add(){
    this.addValue+=1;
  }

  setDados(event: {nome: string, idade: number}){
    this.getDados = event
  }

  
}
