import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
//Services are an integral part of Angular applications. In Angular, a service is an instance of a class that can be made available to any part of your application using Angular's dependency injection system.
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
    ) {}
  
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
  
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}