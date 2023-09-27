import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { min } from 'rxjs';
import { DiscountOffers } from 'src/app/models/discount-offers';
import { Icategory } from 'src/app/models/icategory';
import { IProduct } from 'src/app/models/iproduct';
import { Store } from 'src/app/models/store';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: IProduct[];
  productsWithFiltered: IProduct[] = [];
  discount: DiscountOffers;
  category: Icategory[] = [];
  disscount: DiscountOffers;
  cardNumber: string = "0000000000000000";
  date = new Date();

  // filter by category 
  @Input() set filterCategoryInChild(value: number) {
    if (value == 1 || value == 2 || value == 3) {
      this.productsWithFiltered = this.productList.filter(product => product.categoryID == value)
    } else if (value == 0) {
      this.productsWithFiltered = [...this.productList];
    }
    console.log(this.productsWithFiltered)
  };
  // filter by price : 
  @Input() set filterByPriceInChild(value) {
    let priceRange = value.split(",");
    let minPrice: number = Number(priceRange[0])
    let maxPrice: number = Number(priceRange[1])
    console.log(minPrice, maxPrice);
    this.productsWithFiltered = this.productList.filter(product => product.price >= minPrice && product.price <= maxPrice)
    console.log(this.productsWithFiltered);

  };

  // @Input() set filterPriceInChild:number = 0 ;
  // storeLogo = new Store("Mohamed elshahat", ["Shot panels", "oil paintings", "Marker paintings", "Water color paintings"], "https://static.glami.com.tr/img/500x500t/205818606.jpg");

  constructor() {
    this.productList = [
      { id: 2, name: "wood-chair", price: 500, quantity: 5, categoryID: 1, image: "https://rusticreddoor.com/cdn/shop/products/cherry-wood-dining-chair-ladder-back.jpg?v=1694125456&width=1445" },

      { id: 5, name: 'disk chair', price: 1500, quantity: 8, image: 'https://www.ikea.com/eg/en/images/products/millberget-swivel-chair-murum-black__1020142_pe831799_s5.jpg', categoryID: 1 },
      { id: 25, name: 'sufa-chair', price: 100, quantity: 10, image: 'https://images.woodenstreet.de/image/cache/data%2Fchina-furniture%2Fcarolina-lounge-chair-brown%2Fbrown%2FCream%2Fset+images%2Fupdate-15-810x702.jpg', categoryID: 1 },
      { id: 7, name: 'L-sofa ', price: 2000, quantity: 2, image: 'https://marfytouch.com/wp-content/uploads/2023/03/sofa-004.png', categoryID: 2 },
      { id: 17, name: 'U-sofa', price: 500, quantity: 0, image: 'https://i.pinimg.com/originals/a6/89/c3/a689c3d0daed391058bf50e31495d990.png', categoryID: 2 },
      { id: 9, name: 'One-piece', price: 100, quantity: 10, image: 'https://www.at-home.co.in/cdn/shop/products/Somerville3str_45.jpg?v=1657281898', categoryID: 2 },
      { id: 10, name: 'Coby Extendable TV Unit', price: 1300, quantity: 4, image: 'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3 },
      { id: 15, name: 'Accent TV Unit', price: 2000, quantity: 4, image: 'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3 },
      { id: 55, name: 'Plymouth TV Unit', price: 100, quantity: 3, image: 'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3 },
    ];
  }

  ngOnInit(): void {
    this.productsWithFiltered = [...this.productList];
  }

  decreaseQuantity(product: IProduct): void {
    console.log(product)
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  /* 
   steps to make the data from the child to the parent 
  
    creat event handler on the elemnt 
    create event from type event emitter 
    emit the data using emit method  from inside  handler function 
  */

  @Output() _EventEmitter : EventEmitter<IProduct> = new EventEmitter<IProduct>;
  addToCart(product: IProduct) {
    //console.log(product);
    this._EventEmitter.emit(product);
  }



  // filterProducts(value: number): IProduct[] {
  //   console.log("this is selected value ", value);
  //   return this.productList.filter(product => product.categoryID == value);
  // }
}