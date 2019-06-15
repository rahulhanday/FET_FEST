import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerConfirmationComponent } from './farmer-confirmation.component';

describe('FarmerConfirmationComponent', () => {
  let component: FarmerConfirmationComponent;
  let fixture: ComponentFixture<FarmerConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
