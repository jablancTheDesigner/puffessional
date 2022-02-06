import { Component, OnInit } from '@angular/core';
import { ProductsHttpService } from '../../store/http/products-http.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: any[] = [];

  loading: boolean = true;

  constructor(private httpService: ProductsHttpService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.httpService.getProducts().then(data => {
      this.loading = false;
      this.products = data;
    })
  }

}
