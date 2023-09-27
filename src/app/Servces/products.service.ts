import { Injectable, Input } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList: IProduct[] = [];

  constructor() {
    this.productList = [
      {
        id: 2, name: "wood-chair", price: 500, quantity: 5, categoryID: 1, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sint, voluptas praesentium laudantiumrecusandae ullam ipsum illum non molestiae odio.Ad, ipsam voluptate esse earum exercitationem molestias? Magnam,hic!", image: "https://rusticreddoor.com/cdn/shop/products/cherry-wood-dining-chair-ladder-back.jpg?v=1694125456&width=1445"
      },

      {
        id: 5, name: 'disk chair', price: 1500, quantity: 8, image: 'https://www.ikea.com/eg/en/images/products/millberget-swivel-chair-murum-black__1020142_pe831799_s5.jpg', categoryID: 1, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sint, voluptas praesentium laudantiumrecusandae ullam ipsum illum non molestiae odio.Ad, ipsam voluptate esse earum exercitationem molestias? Magnam,hic!"
      },
      {
        id: 25, name: 'sufa-chair', price: 100, quantity: 10, image: 'https://images.woodenstreet.de/image/cache/data%2Fchina-furniture%2Fcarolina-lounge-chair-brown%2Fbrown%2FCream%2Fset+images%2Fupdate-15-810x702.jpg', categoryID: 1, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sint, voluptas praesentium laudantiumrecusandae ullam ipsum illum non molestiae odio.Ad, ipsam voluptate esse earum exercitationem molestias? Magnam,hic!"
      },
      {
        id: 7, name: 'L-sofa ', price: 2000, quantity: 2, image: 'https://marfytouch.com/wp-content/uploads/2023/03/sofa-004.png', categoryID: 2, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sint, voluptas praesentium laudantirecusandae ullam ipsum illum non molestiae odio.Ad, ipsam voluptate esse earum exercitationem molestias? Magnam,hic!"
      },
      {
        id: 17, name: 'U-sofa', price: 500, quantity: 0, image: 'https://i.pinimg.com/originals/a6/89/c3/a689c3d0daed391058bf50e31495d990.png', categoryID: 2, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sint, voluptas praesentium laudantiumrecusandae ullam ipsum illum non molestiae odio.Ad, ipsam voluptate esse earum exercitationem molestias? Magnam,hic!"
      },
      {
        id: 9, name: 'One-piece', price: 100, quantity: 10, image: 'https://www.at-home.co.in/cdn/shop/products/Somerville3str_45.jpg?v=1657281898', categoryID: 2, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sint, voluptas praesentium laudantiumrecusandae ullam ipsum illum non molestiae odio.Ad, ipsam voluptate esse earum exercitationem molestias? Magnam,hic!"
      },
      {
        id: 10, name: 'Coby Extendable TV Unit', price: 1300, quantity: 4, image: 'https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sint, voluptas praesentium laudantiumrecusandae ullam ipsum illum non molestiae odio.Ad, ipsam voluptate esse earum exercitationem molestias? Magnam,hic!"
      },
      {
        id: 15, name: 'Accent TV Unit', price: 2000, quantity: 4, image: 'https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sint, voluptas praesentium laudantiumrecusandae ullam ipsum illum non molestiae odio.Ad, ipsam voluptate esse earum exercitationem molestias? Magnam,hic!"
      },
      {
        id: 55, name: 'Plymouth TV Unit', price: 100, quantity: 3, image: 'https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$', categoryID: 3, details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quam sint, voluptas praesentium laudantium recusandae ullam ipsum illum non molestiae odio.Ad, ipsam voluptate esse earum exercitationem molestias? Magnam,hic!"
      },
    ];
  }
  getAllProducts() {
    return this.productList;
  }
  performFilter = (value) => {
    return this.productList.filter(product => product.categoryID == value)
  }
  getProductByID(prdID: number): IProduct | undefined {
    return this.productList.find(prd => prd.id == prdID);
  }
  // git array with product id 
  getProductIDSList(): number[] {
    return this.productList.map(prd => prd.id)
  }

}
