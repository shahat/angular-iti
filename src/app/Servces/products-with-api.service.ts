import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../models/iproduct';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})

export class ProductsWithApiService {
  constructor(private httpclient: HttpClient) { }
  // Get All Products  

  getAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${environment.BaseApiURL}/products`);
  }
  // Get Product By Id 

  getProductByID(prodID: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(`${environment.BaseApiURL}/products/${prodID}`);
  }
  // Filter Product By Price 

  performFilter(value: string): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${environment.BaseApiURL}/products?price=${value}`);
  };

  // Get All Category 
  getAllCategory(): Observable<Icategory[]> {
    return this.httpclient.get<Icategory[]>(`${environment.BaseApiURL}/category`);
  }

  // git array with product id 

}
