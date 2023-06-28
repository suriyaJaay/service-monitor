import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageComponent } from './heritage.component';

describe('HeritageComponent', () => {
  let component: HeritageComponent;
  let fixture: ComponentFixture<HeritageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeritageComponent]
    });
    fixture = TestBed.createComponent(HeritageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
