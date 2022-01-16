import { TestBed } from '@angular/core/testing';

import { NotableService } from './notable.service';

describe('NotableService', () => {
  let service: NotableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
