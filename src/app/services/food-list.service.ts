import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    'Arroz',
    'Feijão',
    'Macarrão',
  ]

  private url: string = 'http://localhost:3000/';

  public emitEvent = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }

  // return the list
  // public getList(): Array<string> {
  //   return this.list;
  // }
  // http://localhost:3000/list-food

  public getFood(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`);
  }



  // add a new item to the list
  // public addToList(item: string): void {
  //   this.foodListAlert(item);
  //   this.list.push(item);
  // }

  public addFood(value: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}list-food`, { nome: value });
  }


  // public foodListAlert(valor: string){
  //   return this.emitEvent.emit(valor);
  // }

  public foodListAlert(valor: FoodList) {
    return this.emitEvent.emit(valor);
  }


  public editFood(id: number, value: string): Observable<FoodList> {
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { nome: value });
  }

  public deleteFood(id: number): Observable<FoodList> {
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`);
  }


}
