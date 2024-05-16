import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotQuotesComponent } from './got-quotes.component';

describe('GotQuotesComponent', () => {
  let component: GotQuotesComponent;
  let fixture: ComponentFixture<GotQuotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GotQuotesComponent]
    });
    fixture = TestBed.createComponent(GotQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
