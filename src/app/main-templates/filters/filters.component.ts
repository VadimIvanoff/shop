import {Component, OnInit} from '@angular/core';
import {SearchCriteria} from '../../models/searchCriteria';
import {ProductInfoService} from '../../services/product-info.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  rating = [1, 2, 3, 4, 5];
  fromPrice: string;
  toPrice: string;
  selectedRating: number;

  constructor(private getInfo: ProductInfoService) {
  }

  ngOnInit() {
  }

  selectPrice() {
    if (this.fromPrice || this.toPrice) {
      const request: SearchCriteria = {from: this.fromPrice ? parseInt(this.fromPrice, 10) : undefined,
                                        to: this.toPrice ?  parseInt(this.toPrice, 10) : undefined, type: 'price'};
      console.log(request)
      this.getInfo.makeSearchRequest(request);
    }

    // console.log(`from - ${this.fromPrice} --- to - ${this.toPrice}`);
  }

  selectRating() {
    if (this.selectedRating) {
      // console.log(this.rating);
      const request: SearchCriteria = {type: 'rating', rating: this.selectedRating};
      this.getInfo.makeSearchRequest(request);
    }
  }
}
