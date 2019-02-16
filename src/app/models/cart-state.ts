import {Product} from './product';
import {DeliveryAddress} from './delivery-address';

export interface CartState {
  products?: Product[];
  productsIds?: number[];
  total?: number;
  delivery?: boolean;
  status?: string;
  deliveryAddress?: DeliveryAddress;
}
