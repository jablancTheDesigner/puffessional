import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HeroFullComponent } from './components/common/hero/hero-full/hero-full.component';
import { HeroPageComponent } from './components/common/hero/hero-page/hero-page.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ProductDetailsComponent } from './components/store/components/product-details/product-details.component';
import { ProductListComponent } from './components/store/components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    HeroFullComponent,
    HeroPageComponent,
    ShopComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
