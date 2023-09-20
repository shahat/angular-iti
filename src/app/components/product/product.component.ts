import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productTitle: string = "T-shirt ";
  productPrice: number = 250;
  productQuantity: number = 100;
}
