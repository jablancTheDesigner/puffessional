import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsHttpService {

  baseUrl: string = 'https://fakestoreapi.com/products';

  constructor() { }

  getProducts(): Promise<any> {
    const promise = fetch(this.baseUrl)
      .then(res => res.json())
    return promise;
  }

  getProductsByCategory(category: string, pageSize: number = 5): Promise<any> {
    const promise = fetch(this.baseUrl + '/category/' + category + '?limit=' + pageSize)
      .then(res => res.json())
    return promise;
  }

  getProductById(id: number): Promise<any> {
    const promise = fetch(this.baseUrl + '/' + id)
      .then(res => res.json())
    return promise;
  }

  getCatergoies(): Promise<any> {
    const promise = fetch(this.baseUrl + '/category/')
      .then(res => res.json())
    return promise;
  }

}
