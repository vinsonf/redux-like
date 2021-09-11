import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { StateStoreService } from 'src/app/services/state-store.service';

import {filter} from 'rxjs/operators';
import { ACTIONS_USER } from 'src/app/constants/action.messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedInUser: User | null = null;
  constructor(
    public store: StateStoreService,
  ) { }

  ngOnInit(): void {
    // this.store.actionsFilter(ACTIONS_USER.USER_SELECTED).subscribe((action) => {
    //   this.loggedInUser = action.payload as User;
    // })

  }

  get user () {
    return this.store.store$.getValue().selectedUser;
  }

}
