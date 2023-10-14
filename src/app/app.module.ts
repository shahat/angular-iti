import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SecondNavComponent } from './components/second-nav/second-nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageStyleDirective } from './Directives/image-style.directive';
import { CardNumberPipe } from './Pipes/card-number.pipe';
import { ProductsListComponent } from './components/parent-component/parent-component.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './models/iproduct';
import { environment } from 'src/environments/environment.development';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { UserReactiveTempletComponent } from './components/users/user-reactive-form/user-reactive-form.component';
import { AdminComponent } from './components/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    SecondNavComponent,
    SidebarComponent,
    ProductComponent,
    ImageStyleDirective,
    CardNumberPipe,
    ProductsListComponent,
    AboutUsComponent,
    ContactsComponent,
    NotFoundPageComponent,
    GroupOfRoutesComponent,
    ProductDetailsComponent,
    UserAuthComponent,
    UserReactiveTempletComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(private httpclient: HttpClient) { }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(`${environment.BaseApiURL}/products`);
  }

  getProductByID(prodID: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(`${environment.BaseApiURL}/products/${prodID}`);
  }

  // query string
  searchWithMaterial(mat: string): Observable<IProduct[]> {

    return this.httpclient.get<IProduct[]>(`${environment.BaseApiURL}/products?Material=${mat}`)
  }


}
