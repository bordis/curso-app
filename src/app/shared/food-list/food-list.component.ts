import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor(private foodListServices: FoodListService) { }

  public list: Array<FoodList> = [];

  ngOnInit(): void {
    this.foodListServices.getFood().subscribe(
      res => {
        this.list = res;
      },
      err => {
        console.log(err);
      }
    );


    this.foodListServices.emitEvent.subscribe(
      res => {
        alert(`Add => ${res}`);
        return this.list.push(res);
      }
    );
  }

  remove(id: number) {
    this.foodListServices.deleteFood(id).subscribe(
      res => {
        this.list = this.list.filter(item => item.id !== id);
      },
      err => {
        console.log(err);
      }
    );
  }

  atualizar(id: number, value: string) {
    this.foodListServices.editFood(id, value).subscribe(
      res => {
      },
      err => {
        console.log(err);
      }
    );
  }


}
