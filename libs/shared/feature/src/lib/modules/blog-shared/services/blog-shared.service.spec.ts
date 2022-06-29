import { TestBed } from '@angular/core/testing';

import { BlogSharedService } from './blog-shared.service';

describe('BlogSharedService', () => {
  let service: BlogSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
