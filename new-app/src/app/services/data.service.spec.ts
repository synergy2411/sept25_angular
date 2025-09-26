import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return string value from getName() method', () => {
    let str = service.getName();
    expect(str.trim().length).not.toEqual(0);
  });

  it('should return the username when promise is consumed', async () => {
    const username = await service.getPromiseData();
    expect(username).not.toBeUndefined();
  });
  it('should return username when observable is consumed', () => {
    service.getObservableData().subscribe((username) => {
      expect(username.length).not.toEqual(0);
    });
  });
});
