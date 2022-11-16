import { item } from "./CartItems";

export class Cart{
  [x: string]: any;
  items: item[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
}
