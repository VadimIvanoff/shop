import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MatBottomSheet} from '@angular/material';
import {NotificationComponent} from '../main-templates/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {

  private message: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  reportMessage(msg: string) {
    this.message.next(msg);
  }

  getMessage(): Observable<string> {
    return this.message.asObservable();
  }

}
