
//The Angular Router displays components based on the browser's URL and your defined routes. You'll use the Angular Router to combine the products data and route information to display the specific details for each product

import { Component, OnInit } from '@angular/core';
//use product data from an external file. 
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

//implementing interface: An interface is a description of the actions that an object can do
export class ProductDetailsComponent implements OnInit {

  //OnInit: A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. Define an ngOnInit() method to handle any additional initialization tasks.

product; 
  constructor(
     private route: ActivatedRoute,
  ) { }

//The ActivatedRoute is specific to each routed component loaded by the Angular Router. It contains information about the route, its parameters, and additional data associated with the route.

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}
}



