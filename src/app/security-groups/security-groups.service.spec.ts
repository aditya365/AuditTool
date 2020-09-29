import { TestBed } from '@angular/core/testing';

import { SecurityGroupsService } from './security-groups.service';

describe('SecurityGroupServices', () => {
  let service: SecurityGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
