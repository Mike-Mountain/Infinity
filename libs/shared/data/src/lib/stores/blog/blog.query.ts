import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { BlogStore } from './blog.store';
import { BlogState } from '@infinity/schemas';

@Injectable({ providedIn: 'root' })
export class BlogQuery extends QueryEntity<BlogState> {
  constructor(protected store: BlogStore) {
    super(store);
  }
}
