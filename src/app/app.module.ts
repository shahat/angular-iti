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
import { FormsModule } from '@angular/forms';
import { ImageStyleDirective } from './Directives/image-style.directive';
import { CardNumberPipe } from './Pipes/card-number.pipe';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { GroupOfRoutesComponent } from './components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

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
    ParentComponentComponent,
    AboutUsComponent,
    ContactsComponent,
    NotFoundPageComponent,
    GroupOfRoutesComponent,
    ProductDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
