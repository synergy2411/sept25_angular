import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import { By } from '@angular/platform-browser';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should create username as 'Monica Geller'", () => {
    expect(component.username).toEqual('Monica Geller');
  });

  it('should render username on the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, Monica Geller!'
    );
  });

  it('should render paragraph on the template', () => {
    const de = fixture.debugElement;
    const paragraphEl = de.query(By.css('#goodbye'));
    expect(paragraphEl.nativeElement.textContent).toContain(
      'GoodBye Monica Geller'
    );
  });
});
