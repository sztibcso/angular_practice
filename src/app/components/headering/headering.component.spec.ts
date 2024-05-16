import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderingComponent } from './headering.component';

describe('HeaderingComponent', () => {
  let component: HeaderingComponent;
  let fixture: ComponentFixture<HeaderingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderingComponent]
    });
    fixture = TestBed.createComponent(HeaderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
