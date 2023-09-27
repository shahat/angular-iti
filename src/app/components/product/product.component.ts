import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//import { min } from 'rxjs';
import { ProductsService } from 'src/app/Servces/products.service';
import { DiscountOffers } from 'src/app/models/discount-offers';
import { Icategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
//import { Store } from 'src/app/models/store';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  constructor(public prdService: ProductsService) {
  }

  // productList: IProduct[];
  productsWithFiltered: IProduct[] = [];
  discount: DiscountOffers;
  category: Icategory[] = [];
  disscount: DiscountOffers;
  cardNumber: string = "0000000000000000";
  date = new Date();

  ngOnInit(): void {
    this.productsWithFiltered = [...this.prdService.getAllProducts()];
  }
  // filter by category 
  @Input() set filterCategoryInChild(value: number) {
    if (value == 1 || value == 2 || value == 3) {
      this.productsWithFiltered = this.prdService.performFilter(value)
    } else if (value == 0) {
      this.productsWithFiltered = [...this.prdService.getAllProducts()];
    }
    console.log(this.productsWithFiltered)
  };

  // filter by price : 
  @Input() set filterByPriceInChild(value) {
    let priceRange = value.split(",");
    let minPrice: number = Number(priceRange[0])
    let maxPrice: number = Number(priceRange[1])
    console.log(minPrice, maxPrice);
    this.productsWithFiltered = this.prdService.getAllProducts().filter(product => product.price >= minPrice && product.price <= maxPrice)
    console.log(this.productsWithFiltered);

  };

  // passing data to the parent 
  @Output() _EventEmitter: EventEmitter<IProduct> = new EventEmitter<IProduct>;
  addToCart(product: IProduct) {
    this._EventEmitter.emit(product);
  }

}