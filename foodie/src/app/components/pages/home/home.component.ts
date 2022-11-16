import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];

  constructor(private _foodservice:FoodService, activatedRoute:ActivatedRoute, private cartService:CartService) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods = this._foodservice.getAllFoodBySearchTerm(params.searchTerm)
      else if(params.tag)
      this.foods = this._foodservice.getAllFoodsByTag(params.tag)
      else
      this.foods = _foodservice.getAll();
    })

  }

  ngOnInit(): void {
  }


}
