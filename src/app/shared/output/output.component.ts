import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> = [
    {nome: 'Juliano', idade: 35},
    {nome: 'Alline', idade: 35},
    {nome: 'Isolda', idade: 70}
  ]

  getDados(index: number){
    this.enviarDados.emit(this.list[index])
  }

}
