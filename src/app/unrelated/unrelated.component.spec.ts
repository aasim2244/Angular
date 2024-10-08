import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrelatedComponent } from './unrelated.component';

describe('UnrelatedComponent', () => {
  let component: UnrelatedComponent;
  let fixture: ComponentFixture<UnrelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnrelatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnrelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
