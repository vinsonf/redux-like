import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ACTIONS_USER } from '../constants/action.messages';
import { User } from '../models/user';
import { ApiService } from './api.service';
import { StateStoreService } from './state-store.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private apiService: ApiService,
    private store: StateStoreService,
    ) { }


  getUsers() {
    this.apiService.get<User[]>('users').pipe(tap((users) => {
      this.store.submitAction({type: ACTIONS_USER.USER_FETCHED_USERS, payload: users})
    }) ).subscribe();
  }
  addUser(value: string) {

    const user = new User();
    user.name = value;
    this.apiService.post<User[], User>('users', user);
  }
}
