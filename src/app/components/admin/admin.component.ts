import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsWithApiService } from 'src/app/Servces/products-with-api.service';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  product: IProduct = {} as IProduct;
  constructor(private userService: ProductsWithApiService, private router: Router) { }

  addNewProduct() {

    this.userService.addNewProduct(this.product).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/productparent']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


}
