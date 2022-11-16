import {Food} from "./app/shared/models/Food"
import { Tag } from "./app/shared/models/Tag"

export const the_food: Food[] =[
  {
    id: '1',
    name:'burger',
    price: 2345,

    favourite: true,
    stars:4,
    imageUrl: 'assets/image/burger.jpg',
    origin:['india, euro'],
    cookTime: '8 -11am',
    tag: ['foodie, foodie'],
  },

  {
    id: '2',
    name:'pizza',
    price: 2345,
    favourite: true,
    stars:4,
    imageUrl: 'assets/image/pizza.jpg',
    origin:['india, euro'],
    cookTime: '8 -11am',
    tag: ['fastfood'],
  },

  {
    id: '3',
    name:'burger',
    price: 2345,
    favourite: true,
    stars:4,
    imageUrl: 'assets/image/burger.jpg',
    origin:['india, euro'],
    cookTime: '8 -11am',
    tag: ['foodie, foodie'],
  },


]

export const sample_tag:Tag[]= [
  {name:'All', count: 6},
  {name:'fastfood', count: 3},
  {name:'pizza', count:1}
]
