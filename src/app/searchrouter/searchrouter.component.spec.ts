import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrouterComponent } from './searchrouter.component';

describe('RouterComponent', () => {
  let component: SearchrouterComponent;
  let fixture: ComponentFixture<SearchrouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchrouterComponent]
    });
    fixture = TestBed.createComponent(SearchrouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
