import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tag?:Tag[];
  constructor(foodservice:FoodService) {
    this.tag = foodservice.getAllTags();
  }

  ngOnInit(): void {
  }

}
