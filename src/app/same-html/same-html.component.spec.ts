import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameHTMLComponent } from './same-html.component';

describe('SameHTMLComponent', () => {
  let component: SameHTMLComponent;
  let fixture: ComponentFixture<SameHTMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SameHTMLComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SameHTMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
