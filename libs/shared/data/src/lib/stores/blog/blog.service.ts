import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { BlogStore } from './blog.store';
import { BlogState } from '@infinity/schemas';

@Injectable({ providedIn: 'root' })
export class BlogService extends NgEntityService<BlogState> {

  constructor(protected store: BlogStore) {
    super(store);
  }

}
