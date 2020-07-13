import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipBoxComponent } from './tooltip-box.component';

describe('TooltipBoxComponent', () => {
  let component: TooltipBoxComponent;
  let fixture: ComponentFixture<TooltipBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
