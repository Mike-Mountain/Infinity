import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { BlogState } from '@infinity/schemas';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'blog-posts' })
export class BlogStore extends EntityStore<BlogState> {
  constructor() {
    super();
  }
}
