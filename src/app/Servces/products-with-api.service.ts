import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../models/iproduct';
import { Icategory } from '../models/icategory';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})

export class ProductsWithApiService {
  httpheader = {};
  constructor(private httpclient: HttpClient) {
    this.httpheader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }


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
  addNewProduct(product: IProduct): Observable<IProduct> {
    return this.httpclient.post<IProduct>(`${environment.BaseApiURL}/products`, JSON.stringify(product),
      this.httpheader).pipe(
        retry(3),
        catchError((err) => {
          return throwError(() => {
            return new Error('Error while signing up')
          })
        })
      )
  }
  deleteProductById(id: number): Observable<IProduct> {
    return this.httpclient.delete<IProduct>(`${environment.BaseApiURL}/products/${id}`)
  }
  // editProductById(id: number): Observable<IProduct> {
  //   return this.httpclient.patch<IProduct>(`${environment.BaseApiURL}/products/${id}`, JSON.stringify(product),
  //     this.httpheader).pipe(
  //       retry(3),
  //       catchError((err) => {
  //         return throwError(() => {
  //           return new Error('Error while signing up')
  //         })
  //       })
  //     )
  // }
}





