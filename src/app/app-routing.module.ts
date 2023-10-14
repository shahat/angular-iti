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
import { UserReactiveTempletComponent } from './components/users/user-reactive-form/user-reactive-form.component';
import { AdminComponent } from './components/admin/admin.component';
import { userGuard } from './Guard/user.guard';
// import { userGuard } from './Guards/user.guard';
// import { UserTemplateDrivenFormComponent } from './Components/Users/user-template-driven-form/user-template-driven-form.component';

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
    canActivate: [userGuard]
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
    path: "UserReactiveForm",
    component: UserReactiveTempletComponent,
    title: ' add user   ',
  },
  {
    path: "admin",
    component: AdminComponent,
    title: ' admin user   ',
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
