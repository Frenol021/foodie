import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { item } from 'src/app/shared/models/CartItems';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
cartitem!:item;
  constructor(private cartService:CartService) {
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }

  removeToCart(cartItem:item){
    this.cartService.removeToCart(cartItem.food.id);
  }
  changeQuantity(cartItem:item, quantityInString: string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
