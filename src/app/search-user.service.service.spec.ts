import { TestBed } from '@angular/core/testing';

import { SearchUser.ServiceService } from './search-user.service.service';

describe('SearchUser.ServiceService', () => {
  let service: SearchUser.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchUser.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
