import { Component, OnInit } from '@angular/core';
import {ProductInfoService} from '../../services/product-info.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  constructor(private getInfo: ProductInfoService) { }

  ngOnInit() {
  }
  sortProducts(order: string) {
    this.getInfo.sortProducts(order);
  }

}
