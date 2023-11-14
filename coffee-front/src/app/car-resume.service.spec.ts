import { TestBed } from '@angular/core/testing';

import { CarResumeService } from './car-resume.service';

describe('CarResumeService', () => {
  let service: CarResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
