import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

listEstados = [
  {id: 1, nome: 'São Paulo'},
  {id: 2, nome: 'Rio de Janeiro'},
  {id: 3, nome: 'Minas Gerais'},
  {id: 4, nome: 'Bahia'},
  {id: 5, nome: 'Santa Catarina'},
]

public submitForm(form: any){
  console.log(form.value);
}

}
