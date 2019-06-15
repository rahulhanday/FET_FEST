import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRequestComponent } from './farmer-request.component';

describe('FarmerRequestComponent', () => {
  let component: FarmerRequestComponent;
  let fixture: ComponentFixture<FarmerRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
