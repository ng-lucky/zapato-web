import { TestBed } from '@angular/core/testing';

import { UrlConfigsService } from './url-configs.service';

describe('UrlConfigsService', () => {
  let service: UrlConfigsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlConfigsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
