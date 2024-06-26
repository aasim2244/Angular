import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildButtonComponent } from './child-button.component';

describe('ChildButtonComponent', () => {
  let component: ChildButtonComponent;
  let fixture: ComponentFixture<ChildButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
