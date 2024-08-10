import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppS3Component } from './app-s3.component';

describe('AppS3Component', () => {
  let component: AppS3Component;
  let fixture: ComponentFixture<AppS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppS3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
