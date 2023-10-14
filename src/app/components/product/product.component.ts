import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsWithApiService } from 'src/app/Servces/products-with-api.service';
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
  constructor(public prdService: ProductsService,
    public prdAPIservice: ProductsWithApiService) { }


  productsWithFiltered: IProduct[] = [];
  discount: DiscountOffers;
  category: Icategory[] = [];
  disscount: DiscountOffers;
  cardNumber: string = "0000000000000000";
  date = new Date();

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

    console.log(" product with filter in child ", value);

    let priceRange = value.split(",");
    let minPrice: number = Number(priceRange[0])
    let maxPrice: number = Number(priceRange[1])
    console.log(minPrice, maxPrice);


    this.productsWithFiltered = this.prdService.getAllProducts().filter(product => product.price >= minPrice && product.price <= maxPrice)
    console.log(this.productsWithFiltered);
  };

  // add to cart 
  @Output() _EventEmitter: EventEmitter<IProduct> = new EventEmitter<IProduct>;
  addToCart(product: IProduct) {
    this._EventEmitter.emit(product);
  }



  deletePrd(prd: IProduct) {
    this.prdAPIservice.deleteProductById(prd.id as number).subscribe({
      next: (data) => {
        console.log(data);
        this.ngOnInit();
      },
      error(err) {
        console.log(err);

      },
    })
  }
  ngOnInit(): void {
    this.prdAPIservice.getAllProducts().subscribe({
      next: (data) => {
        console.log("this array of the products", data);
        this.productsWithFiltered = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}



