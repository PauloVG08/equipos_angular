import { TestBed } from '@angular/core/testing';

import { EquipoUpdateService } from './equipo-update.service';

describe('EquipoUpdateService', () => {
  let service: EquipoUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipoUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
