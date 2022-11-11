import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];

  constructor(private _foodservice:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.foods = this._foodservice.getAllFoodBySearchTerm(params.searchTerm)
      else if(params.tag)
      this.foods = this._foodservice.getAllFoodsByTag(params.Tag)
      else
      this.foods = _foodservice.getAll();
    })

  }

  ngOnInit(): void {
  }

}
