import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/Servces/products.service';
import { IProduct } from 'src/app/models/iproduct';
import { ProductsWithApiService } from 'src/app/Servces/products-with-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // =====================================  constructor  =====================================  

  constructor(private activatedRoute: ActivatedRoute,
    private prdService: ProductsService,
    private prdService1: ProductsWithApiService,
    private router: Router) { }
  // =====================================  properties  =====================================  

  currentProductID: number = 0;
  product: IProduct | undefined = undefined;
  productsIDSList: number[] = [];
  currentPrdIndex: number = 0;
  // =====================================  input & output  =====================================  

  // =====================================  methods  =====================================  

  ngOnInit(): void {

    this.product = this.prdService.getProductByID(this.currentProductID);//id : 0
    this.productsIDSList = this.prdService.getProductIDSList();// [ 1, 2, 3 ]

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.currentProductID = (paramMap.get('prodID')) ? Number(paramMap.get('prodID')) : 0;
      this.prdService1.getProductByID(this.currentProductID).subscribe((data => {
        if (data) {
          this.product = data
        } else {
          this.router.navigate(["**"])
        }

      }))
    })
  }

  backFunc() {
    this.router.navigate(['/productparent'])
  }
  previousFunc() {

    this.currentPrdIndex = this.productsIDSList.indexOf(this.currentProductID);
    console.log(this.currentPrdIndex);
    this.router.navigate(['/productDetails', this.productsIDSList[--this.currentPrdIndex]]);

  }
  nextFunc() {
    this.currentPrdIndex = this.productsIDSList.indexOf(this.currentProductID);
    this.router.navigate(['/productDetails', this.productsIDSList[++this.currentPrdIndex]])
  }
}