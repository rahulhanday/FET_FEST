import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerFeedComponent } from './farmer-feed.component';

describe('FarmerFeedComponent', () => {
  let component: FarmerFeedComponent;
  let fixture: ComponentFixture<FarmerFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
