import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOneComponent } from './counter-one.component';

describe('CounterOneComponent', () => {
  let component: CounterOneComponent;
  let fixture: ComponentFixture<CounterOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
