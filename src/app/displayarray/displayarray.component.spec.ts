import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayarrayComponent } from './displayarray.component';

describe('DisplayarrayComponent', () => {
  let component: DisplayarrayComponent;
  let fixture: ComponentFixture<DisplayarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
