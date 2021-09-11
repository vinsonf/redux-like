import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedPostComponent } from './components/selected-post/selected-post.component';

const routes: Routes = [{
  path: 'selected-post', component: SelectedPostComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
