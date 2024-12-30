import { TestBed } from '@angular/core/testing';

import { SearchSignalService } from './search-signal.service';

describe('SearchSignalService', () => {
  let service: SearchSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
