import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  message: string;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: string) { }

  ngOnInit() {
    this.message = this.data;
  }

}
