import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifisearchComponent } from './wifisearch.component';

describe('WifisearchComponent', () => {
  let component: WifisearchComponent;
  let fixture: ComponentFixture<WifisearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WifisearchComponent]
    });
    fixture = TestBed.createComponent(WifisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
