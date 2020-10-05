import { TestBed } from '@angular/core/testing';

import { SearchRepo.ServiceService } from './search-repo.service.service';

describe('SearchRepo.ServiceService', () => {
  let service: SearchRepo.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchRepo.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
