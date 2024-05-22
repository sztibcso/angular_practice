import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonForgottComponent } from './button-forgott.component';

describe('ButtonForgottComponent', () => {
  let component: ButtonForgottComponent;
  let fixture: ComponentFixture<ButtonForgottComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonForgottComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonForgottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
