import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateSearchPageComponent } from './private-search-page.component';

describe('PrivateSearchPageComponent', () => {
  let component: PrivateSearchPageComponent;
  let fixture: ComponentFixture<PrivateSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
