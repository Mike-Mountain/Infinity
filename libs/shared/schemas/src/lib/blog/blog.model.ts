import { EntityState } from '@datorama/akita';
import { ResponseBase } from '../response-base/response-base.model';

export type BlogState = EntityState<BlogPost>

export class BlogPost {
  id: number;
  title: string;
  content: string;
  imageUrl: string;

  constructor(params: any) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    this.imageUrl = params.imageUrl;
  }
}

export class BlogResponse extends ResponseBase {
  data: BlogPost[];
  meta: BlogPagination;

  constructor(params: Partial<BlogResponse>) {
    super(params);
    this.data = params?.data?.map(post => new BlogPost(post)) || [];
    this.meta = new BlogPagination(params?.meta);
  }
}

export class BlogPagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;

  constructor(params?: Partial<BlogPagination>) {
    this.page = params?.page || 1;
    this.pageCount = params?.pageCount || 1;
    this.pageSize = params?.pageSize || 1;
    this.total = params?.total || 1;
  }
}
