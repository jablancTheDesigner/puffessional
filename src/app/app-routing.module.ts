import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ProductDetailsComponent } from './components/store/components/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'shop',
    children: [
      {
        path: '',
        component: ShopComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
