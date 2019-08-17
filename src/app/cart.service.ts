import { Injectable } from '@angular/core';
//Services are an integral part of Angular applications. In Angular, a service is an instance of a class that can be made available to any part of your application using Angular's dependency injection system.
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {}
  
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}