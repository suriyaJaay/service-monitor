import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverAllHealthComponent } from './over-all-health.component';

describe('OverAllHealthComponent', () => {
  let component: OverAllHealthComponent;
  let fixture: ComponentFixture<OverAllHealthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverAllHealthComponent]
    });
    fixture = TestBed.createComponent(OverAllHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
