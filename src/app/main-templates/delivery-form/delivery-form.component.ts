import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isBoolean} from 'util';
import {DeliveryAddress} from '../../models/delivery-address';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  @Output() addressIsValid: EventEmitter<DeliveryAddress> = new EventEmitter(undefined);
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'town': ['', Validators.required],
      'street': ['', Validators.required],
      'buildingNumber': ['', Validators.required]
    });
  }
  validateAddress() {
    if (this.form.valid) {
      const address: DeliveryAddress = this.form.value;
      this.addressIsValid.emit(address);
    }
  }
}
