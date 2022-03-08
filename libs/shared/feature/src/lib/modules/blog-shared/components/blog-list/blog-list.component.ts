import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogData, BlogResponse } from '@infinity/schemas';
import { BlogQuery } from '@infinity/data';
import { BlogService } from '@infinity/data';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavigationService } from '@infinity/navigation';

@Component({
  selector: 'feature-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts$: Observable<BlogData[]> | undefined;
  selectedPostId: number | undefined;

  constructor(private blogPostQuery: BlogQuery,
              private blogPostService: BlogService,
              private navigationService: NavigationService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (!this.blogPostQuery.getHasCache()) {
      this.blogPostService.get().subscribe();
    }
    this.blogPosts$ = this.blogPostQuery.select().pipe(
      map(posts => {
        return new BlogResponse(JSON.parse(JSON.stringify(posts.entities))).data
      })
    )
    this.selectedPostId = this.getPostIdFromUrl(this.router.url);
  }

  getPostIdFromUrl(url: string): number {
    const id = url.split('/');
    return Number(id[2]);
  }

  addNavigationTab(post: BlogData) {
    this.navigationService.addTab({
      name: post.attributes.title,
      type: 'contentTab',
      path: `/blog/${post.id}`
    })
  }
}
