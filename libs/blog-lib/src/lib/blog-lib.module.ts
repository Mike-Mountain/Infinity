import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: BlogPostComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [BlogPostComponent],
})
export class BlogLibModule {}
