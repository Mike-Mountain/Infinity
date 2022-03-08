import { EntityState } from '@datorama/akita';
import { ResponseBase } from '../response-base/response-base.model';

export type BlogState = EntityState<BlogData>

export class BlogPost {
  title: string;
  content: string;
  imageUrl: string;

  constructor(params: any) {
    this.title = params.title;
    this.content = params.content;
    this.imageUrl = params.imageUrl;
  }
}

export class BlogResponse extends ResponseBase {
  data: BlogData[];
  meta: BlogMeta;

  constructor(params: Partial<BlogResponse>) {
    super(params);
    this.data = params?.data?.map(post => new BlogData(post)) || [];
    this.meta = new BlogMeta(params?.meta);
  }
}

export class BlogData {
  attributes: BlogPost;
  id: number;

  constructor(params: BlogData) {
    this.attributes = new BlogPost(params.attributes);
    this.id = params.id;
  }
}

export class BlogMeta {
  pagination: BlogPagination;

  constructor(params?: Partial<BlogMeta>) {
    this.pagination = new BlogPagination(params?.pagination);
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
