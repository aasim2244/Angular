import { TestBed } from '@angular/core/testing';

import { SearchSubjectServiceService } from './search-subject.service';

describe('SearchSubjectServiceService', () => {
  let service: SearchSubjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchSubjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
