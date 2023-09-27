import { Component } from '@angular/core';
import { Icategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent {
  selectedCategory: number;
  priceFiltervlaue: any[];
  searchFilter: string;
  priceFilter: any[] = [

    { id: 1, name: [0, 100] },
    { id: 2, name: [100, 1000] },
    { id: 3, name: [1000, 2000] },

  ];

  categories: Icategory[] = [
    { id: 0, name: "all" },
    { id: 1, name: 'chair' },
    { id: 2, name: 'sofa' },
    { id: 3, name: 'tv-unit' },
  ];
  cart: IProduct[] = [];

  cartFun(product: IProduct) {
    // const newProduct = Object.assign(product);
    const checkProduct = this.cart.filter((ele) => ele.id == product.id)[0];
    if (checkProduct) {
      checkProduct.quantity++;
      product.quantity--
      // console.log(checkProduct, product.quantity);
    } else {
     const pushedProduct = { ...product };
     pushedProduct.quantity = 1;
      this.cart.push({...pushedProduct});
      // console.log(this.cart)
      product.quantity--;
    }
  };

  deleteProduct(product: IProduct) {
    this.cart = this.cart.filter((ele) => ele.id != product.id);
  }
}


