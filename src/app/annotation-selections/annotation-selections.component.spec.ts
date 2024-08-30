import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationSelectionsComponent } from './annotation-selections.component';

describe('AnnotationSelectionsComponent', () => {
  let component: AnnotationSelectionsComponent;
  let fixture: ComponentFixture<AnnotationSelectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnotationSelectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnotationSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
