import { Component, OnInit } from '@angular/core';
import { BlogQuery } from '@infinity/data';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '@infinity/schemas';
import { map } from 'rxjs';

@Component({
  selector: 'blog-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blogArticle: BlogPost | undefined;

  constructor(private blogQuery: BlogQuery, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.blogQuery.select((blog) => blog.entities)
        .pipe(map((entities) => entities?.data as unknown as BlogPost[]))
        .subscribe((posts) => {
          if (posts?.length > 0) {
            this.blogArticle = posts.filter(post => post.id.toString() === params.id)[0];
            console.log(this.blogArticle);
          }
        });
    });
  }
}
