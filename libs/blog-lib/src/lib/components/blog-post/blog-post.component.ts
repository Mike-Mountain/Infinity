import { Component, OnInit } from '@angular/core';
import { BlogQuery } from '@infinity/data';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '@infinity/schemas';

@Component({
  selector: 'blog-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  blogArticle: BlogPost | undefined;

  constructor(private blogQuery: BlogQuery, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.blogQuery.selectEntity(params.id).subscribe((post) => {
        this.blogArticle = post;
        console.log(post);
      });
    });
  }
}
