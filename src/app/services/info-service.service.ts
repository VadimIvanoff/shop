import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {MatBottomSheet} from '@angular/material';
import {NotificationComponent} from '../main-templates/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {

  private message: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private bottomSheet: MatBottomSheet) {
  }

  reportMessage(msg: string) {
    this.message.next(msg);
  }
  reportMessage2(msg: string) {
    this.openBottomSheet(msg);
    this.closeBottomSheet(5000);
  }

  getMessage(): Observable<string> {
    return this.message.asObservable();
  }
  openBottomSheet(msg: string): void {
    this.bottomSheet.open(NotificationComponent, {
      data: msg
    });
  }

  closeBottomSheet(delay: number): void {
    setTimeout(() => this.bottomSheet.dismiss(), delay);
  }
}
