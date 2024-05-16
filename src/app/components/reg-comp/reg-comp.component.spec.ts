import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCompComponent } from './reg-comp.component';

describe('RegCompComponent', () => {
  let component: RegCompComponent;
  let fixture: ComponentFixture<RegCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegCompComponent]
    });
    fixture = TestBed.createComponent(RegCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
