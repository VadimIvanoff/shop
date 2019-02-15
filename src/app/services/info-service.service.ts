import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

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
