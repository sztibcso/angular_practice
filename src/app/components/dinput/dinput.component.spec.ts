import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinputComponent } from './dinput.component';

describe('DinputComponent', () => {
  let component: DinputComponent;
  let fixture: ComponentFixture<DinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
