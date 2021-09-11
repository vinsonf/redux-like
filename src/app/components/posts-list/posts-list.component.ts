import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { StateStoreService } from 'src/app/services/state-store.service';
import { PostsService } from 'src/app/services/posts.service';
import { ACTIONS_POST } from 'src/app/constants/action.messages';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private store: StateStoreService,
    ) { }

  ngOnInit(): void {
    this.postsService.getPosts();
  }

  get posts$ () {
    return this.postsService.posts$;
  }

  selectPost(post: Post) {
    this.store.submitAction({type: ACTIONS_POST.POST_SELECTED, payload: post})
  }

}
