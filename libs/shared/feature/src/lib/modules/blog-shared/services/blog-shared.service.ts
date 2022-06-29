import { Injectable } from '@angular/core';
import { BlogQuery, BlogService } from '@infinity/data';
import { map } from 'rxjs/operators';
import { BlogPost, BlogResponse } from '@infinity/schemas';
import { Observable } from 'rxjs';
import { NavigationService } from '@infinity/navigation';

@Injectable({
  providedIn: 'root'
})
export class BlogSharedService {

  constructor(private blogQuery: BlogQuery,
              private blogService: BlogService,
              private navigationService: NavigationService) { }

  getBlogPosts(): Observable<BlogPost[]> {
    if (!this.blogQuery.getHasCache()) {
      this.blogService.get().subscribe();
    }
    return this.blogQuery.select().pipe(
      map((posts) => {
        return new BlogResponse(JSON.parse(JSON.stringify(posts.entities)))
          .data;
      })
    );
  }

  getPostIdFromUrl(url: string): number {
    const id = url.split('/');
    return Number(id[2]);
  }

  addNavigationTab(post: BlogPost) {
    this.navigationService.addTab({
      name: post.title,
      type: 'contentTab',
      path: `/blog/${post.id}`,
      selected: true
    });
  }
}
