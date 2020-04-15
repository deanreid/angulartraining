import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';



@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
    title: string ="Product List";
    imageWidth: number=50;
    imageMargin: number =2;
    showImage: boolean=false;
    // listFilter: string='cart';
    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            "productId": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2019",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "assets/images/saw.png"
          },
          {
            "productId": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2018",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "assets/images/xbox-controller.png"
          }
    ];

    constructor() {
      this.filteredProducts = this.products;
      this._listFilter = 'cart';
    }
    ngOnInit(): void {
      console.log('Hit OnInit');
    }

     performFilter (filterBy: string): IProduct[] {
       filterBy = filterBy.toLocaleLowerCase();
       return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
     }
    toggleImage():void {
      this.showImage = !this.showImage;
    }
}