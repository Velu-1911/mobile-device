import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaymatComponent } from './displaymat.component';

describe('DisplaymatComponent', () => {
  let component: DisplaymatComponent;
  let fixture: ComponentFixture<DisplaymatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaymatComponent]
    });
    fixture = TestBed.createComponent(DisplaymatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
