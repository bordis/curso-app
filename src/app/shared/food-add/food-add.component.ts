import { Component } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent {

  constructor( private foodListService: FoodListService) { }

  public addFood(item: string): void {
    this.foodListService.addFood(item).subscribe(
      res => {
        this.foodListService.foodListAlert(res);
      }, error => {
        console.log(error);
      }
    );
  }



}
