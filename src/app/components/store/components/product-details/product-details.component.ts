import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsHttpService } from '../../http/products-http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  similarProducts: any[];

  constructor(private httpService: ProductsHttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.getProduct(data.id)
    })
  }

  async getProduct(id: number): Promise<void> {
    await this.httpService.getProductById(id).then(data => {
      this.product = data;
      this.getSimilarProducts(this.product.category)
    })
  }

  async getSimilarProducts(category: string): Promise<void> {
    await this.httpService.getProductsByCategory(category, 3).then(data => {
      this.similarProducts = data;
    })
  }

}
