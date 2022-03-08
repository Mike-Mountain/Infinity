export class ResponseBase {
  createdAt: Date;
  publishedAt: Date;
  updatedAt: Date;

  constructor(params?: Partial<ResponseBase>) {
    this.createdAt = new Date(params?.createdAt || new Date());
    this.publishedAt = new Date(params?.publishedAt || new Date());
    this.updatedAt = new Date(params?.updatedAt || new Date());
  }
}
