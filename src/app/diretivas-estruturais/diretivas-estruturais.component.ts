import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true
  public conditionClick: boolean = true
  public cor: string = 'red'

  public list: Array<{ nome: string, idade: number, permision: number}> = [
    {nome: 'Juliano Bordignon', idade: 35, permision: 1},
    {nome: 'Alline Tonelotto', idade: 36, permision: 2}
  ];

  userForm = new FormGroup({
    nome: new FormControl(),
    idade: new FormControl(),
    permision: new FormControl(),
  });

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false
      } else {
        this.condition = true
      }
    }, 2000)
  }

  onClick(){
    if (this.conditionClick) {
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }

  addList(){
    const nome: string = this.userForm.value.nome
    const idade: number = this.userForm.value.nome
    const permision: number = this.userForm.value.permision
    this.list.push({nome, idade, permision})
  }

  deleteList(index: number){
    this.list.splice(index,1)
  }

  mudarCor(){
    if(this.cor == 'red'){
      this.cor = 'blue'
    }else{
      this.cor ='red'
    }
  }

}
