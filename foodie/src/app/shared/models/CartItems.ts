import { Food } from "./Food";

export class item{
  constructor(public food: Food){

  }

  quantity:number = 1;
  price:number = this.food.price;
}
