import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksChild1Component } from './hooks-child-1.component';

describe('HooksChild1Component', () => {
  let component: HooksChild1Component;
  let fixture: ComponentFixture<HooksChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HooksChild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HooksChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
