import { Injectable } from '@angular/core';
import { sample_tag, the_food } from 'src/data';
import { TagsComponent } from '../components/partial/tags/tags.component';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return the_food
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))

  }
  getAllTags():Tag[]{
    return sample_tag
  }
  getAllFoodsByTag(tag:string):Food[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(food =>food.tag?.includes(tag))
  }
}

