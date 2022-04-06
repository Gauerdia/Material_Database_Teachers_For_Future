import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSearchPageComponent } from './public-search-page.component';

describe('PublicSearchPageComponent', () => {
  let component: PublicSearchPageComponent;
  let fixture: ComponentFixture<PublicSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
