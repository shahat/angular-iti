import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsWithApiService } from 'src/app/Servces/products-with-api.service';
import { Icategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],
})
export class ProductsListComponent implements OnInit {

  // =====================================  constructor   =====================================  

  constructor(private router: Router, public prdAPIservice: ProductsWithApiService) { }

  // =====================================  properties  ===================================== 

  productList: IProduct[] = [];
  productsWithFiltered: IProduct[] = [];
  selectedCategory: string = "";
  priceFilter: any[] = [[0, 100], [101, 1000], [1001, 2500]]
  categories: Icategory[];
  priceFiltervlaue: string = "";

  // =====================================  input & output ===================================== 


  // @Input() set listFilterInChild(value: string) {
  //   console.log('in setter: ', value);
  //   this.productsWithFiltered = this.prdAPIservice.performFilter(value);
  // }


  @Output() newPrdEvent: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  addToCart(product: IProduct) {
    this.newPrdEvent.emit(product);
  }
  // ===================================== other methods ===================================== 
  prdDetails(prdID: number) {
    this.router.navigate(['/ProductDetails', prdID]);
  }

  ngOnInit(): void {
    this.prdAPIservice.getAllProducts().subscribe({
      next: (data) => {
        this.productsWithFiltered = data;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this.prdAPIservice.getAllCategory().subscribe({
      next: (data) => {
        console.log("category data ", data);
        this.categories = data;
      },
      error: (err) => {
        console.log("error in fetching category ", err);
      }
    })
  }
}

