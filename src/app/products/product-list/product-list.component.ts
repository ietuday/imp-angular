import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  productList: Array<any> = [];
}
