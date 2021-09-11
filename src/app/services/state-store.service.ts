import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post';
import { User } from '../models/user';
import {filter} from 'rxjs/operators';
import { ACTIONS_POST, ACTIONS_USER } from '../constants/action.messages';

type ActionPayload = Post | User | null | User[];

type Action = {
  type: string;
  payload: ActionPayload;
}

interface Store {
  selectedUser: ActionPayload;
  selectedPost: ActionPayload;
  users: ActionPayload;
  posts: ActionPayload;
}



@Injectable({
  providedIn: 'root'
})
export class StateStoreService {
  actions$ = new BehaviorSubject<Action>({type: 'init', payload: null});
  store$ = new BehaviorSubject<Store>({
    selectedUser: null,
    selectedPost: null,
    users: [],
    posts: [],
  })
  constructor() {

    this.actions$.subscribe((action) => {

      this.reducer(action)
    })
  }

  submitAction(action: Action ) {
    this.actions$.next(action)
  }

  actionsFilter(actionMessage: string) {
    return this.actions$.pipe(filter(action => {
      return action.type === actionMessage
    }))
  }

  reducer(action: Action) {
    console.log(action.type)
    let storeValue = null;
    switch (action.type) {
      case ACTIONS_USER.USER_SELECTED:
      storeValue = this.store$.getValue()
      this.store$.next({...storeValue, selectedUser: action.payload})
      break;
      case ACTIONS_USER.USER_FETCHED_USERS:
        storeValue = this.store$.getValue();
        this.store$.next({...storeValue, users: action.payload})
        break;
      case ACTIONS_POST.POST_SELECTED:
        storeValue = this.store$.getValue()
        this.store$.next({...storeValue, selectedPost: action.payload})
        break;
    }




  }


}



