import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  public nome: string = 'Juliano'
  public idade: number = 35
  public aposentadoria: number = 65

  public checkedDisabled: boolean = false
  public altImg: string = 'Teste de imagem'
  public urlImg: string = 'https://picsum.photos/200/300'

  public position: { x: number, y: number } = { x: 0, y: 0 }

  public color: string = 'red'

  ngOnInit(): void { 
  }

  public onClick(valor: MouseEvent){
    console.log(valor)
  }

  public mouseMoveTest(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  mudarBackground(){
    this.color = 'blue'
  }
}
