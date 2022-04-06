import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveMaterialPageComponent } from './approve-material-page.component';

describe('ApproveMaterialPageComponent', () => {
  let component: ApproveMaterialPageComponent;
  let fixture: ComponentFixture<ApproveMaterialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveMaterialPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveMaterialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
