import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNavbarComponent } from './first-navbar.component';

describe('FirstNavbarComponent', () => {
  let component: FirstNavbarComponent;
  let fixture: ComponentFixture<FirstNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
