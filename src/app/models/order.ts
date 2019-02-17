import {Product} from './product';
import {DeliveryAddress} from './delivery-address';

export interface Order {
  id?: number;
  customer?: string;
  productsIds?: number[];
  status?: string;
  products?: Product[];
  deliveryAddress?: string;
}
