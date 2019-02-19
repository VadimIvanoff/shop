import { Component, OnInit } from '@angular/core';
import {MatBottomSheet} from '@angular/material';
import {NotificationComponent} from '../notification/notification.component';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.css']
})
export class MainFrameComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet, private info: InfoService) { }

  ngOnInit() {

  }

}
