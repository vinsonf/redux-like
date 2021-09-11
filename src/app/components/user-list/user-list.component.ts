import { Component, OnInit } from '@angular/core';
import { ACTIONS_USER } from 'src/app/constants/action.messages';
import { User } from 'src/app/models/user';
import { StateStoreService } from 'src/app/services/state-store.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private store: StateStoreService,
    ) { }

  ngOnInit(): void {
    this.usersService.getUsers();
  }

  get users$ () {
    return this.store.store$.getValue().users as User[]
  }

  selectUser(user: User) {
    this.store.submitAction({type: ACTIONS_USER.USER_SELECTED, payload: user})
  }

}
