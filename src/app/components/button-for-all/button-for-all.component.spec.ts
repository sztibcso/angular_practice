import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonForAllComponent } from './button-for-all.component';

describe('ButtonForAllComponent', () => {
  let component: ButtonForAllComponent;
  let fixture: ComponentFixture<ButtonForAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonForAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonForAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
