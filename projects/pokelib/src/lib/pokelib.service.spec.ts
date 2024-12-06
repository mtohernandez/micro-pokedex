import { TestBed } from '@angular/core/testing';

import { PokelibService } from './pokelib.service';

describe('PokelibService', () => {
  let service: PokelibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokelibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
