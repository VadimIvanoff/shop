import { Component, OnInit } from '@angular/core';
import {GetProductInfoService} from '../../services/get-product-info.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  constructor(private getInfo: GetProductInfoService) { }

  ngOnInit() {
  }
  sortProducts(order: string) {
    this.getInfo.sortProducts(order);
  }

}
