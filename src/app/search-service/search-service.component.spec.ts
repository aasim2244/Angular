import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchService } from './search-service.component';

describe('SearchServiceComponent', () => {
  let component: SearchService;
  let fixture: ComponentFixture<SearchService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
