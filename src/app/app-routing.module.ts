import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/parent-component/parent-component.component';
import { MainComponent } from './components/main/main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';

const routes: Routes = [

  // {path:'', component:MainComponent},// default path
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // default path
  { path: 'Home', component: MainComponent, title: 'Home Page' },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    title: 'About us page',
  },
  {
    path: 'contactus',
    component: ContactsComponent,
    title: 'contact us page',
  },
  {
    path: 'product',
    component: ProductComponent,
    title: 'Products  Page',
  },
  {
    path: 'productparent',
    component: ProductsListComponent,
    title: 'Products Parent Page',
  },
  {
    path: 'productDetails/:prodID',
    component: ProductDetailsComponent,
    title: 'product details page ',
  },
  {
    path: "user",
    loadChildren: () => import("./components/user/user.module").then(m => m.UserModule)
  },
  {
    path: "userLogIn",
    component: UserAuthComponent,
    title: ' user login page  ',
  },
  {
    path: "userLogOut",
    component: UserAuthComponent,

    title: ' user logout page  ',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    title: 'Products Parent Page',
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
