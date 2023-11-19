import { TestBed } from '@angular/core/testing';

import { FavorisManagerService } from './favoris-manager.service';

describe('FavorisManagerService', () => {
  let service: FavorisManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavorisManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
