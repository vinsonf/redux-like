import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ACTIONS_POST } from 'src/app/constants/action.messages';
import { Post } from 'src/app/models/post';
import { StateStoreService } from 'src/app/services/state-store.service';

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.scss']
})
export class SelectedPostComponent implements OnInit {
  selectedPost: Post | null = null;
  constructor(
    public store: StateStoreService,
  ) { }

  ngOnInit(): void {
    this.store.actionsFilter(ACTIONS_POST.POST_SELECTED).subscribe((action) => {
      this.selectedPost = action.payload as Post;
    })
  }

}
