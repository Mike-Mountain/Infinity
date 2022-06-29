import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost, BlogResponse } from '@infinity/schemas';
import { BlogQuery } from '@infinity/data';
import { BlogService } from '@infinity/data';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavigationService } from '@infinity/navigation';
import { BlogSharedService } from '../../services/blog-shared.service';

@Component({
  selector: 'feature-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts$: Observable<BlogPost[]> | undefined;
  selectedPostId: number | undefined;

  constructor(
    private blogPostQuery: BlogQuery,
    private blogPostService: BlogService,
    private sharedBlogService: BlogSharedService,
    private navigationService: NavigationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.blogPosts$ = this.sharedBlogService.getBlogPosts();
    this.selectedPostId = this.sharedBlogService.getPostIdFromUrl(this.router.url);
  }

  addTab(post: BlogPost) {
    this.sharedBlogService.addNavigationTab(post);
  }
}
