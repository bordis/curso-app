import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent {

  valor: boolean = true;
  tamanho: number = 300;
  nome: string = ''
  nomes: Array<{nome: string}> = [{nome:'Juliano'}]
  dateTime: Date = new Date

  onClick(){
    if(this.valor==true){
      this.valor=false
    }else{
      this.valor=true
    }
  }

  mudarTamanho(){
    if(this.tamanho == 300){
      this.tamanho = 150
    }else{
      this.tamanho = 300
    }
  }

  salvar(){
    this.nomes.push({nome: this.nome})
    this.nome = ''
  }

  delete(event: number){
    this.nomes.splice(event, 1)
  }



}
