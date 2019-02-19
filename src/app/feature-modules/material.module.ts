import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatRadioModule, MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import {ProductDetailsComponent} from '../catalog/product-details/product-details.component';
import {NotificationComponent} from '../main-templates/notification/notification.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatRadioModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatRadioModule
  ],
  entryComponents: [ProductDetailsComponent, NotificationComponent]
})
export class MaterialModule { }
