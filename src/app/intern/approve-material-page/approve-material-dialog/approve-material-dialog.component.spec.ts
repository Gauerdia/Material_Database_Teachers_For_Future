import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveMaterialDialogComponent } from './approve-material-dialog.component';

describe('ApproveMaterialDialogComponent', () => {
  let component: ApproveMaterialDialogComponent;
  let fixture: ComponentFixture<ApproveMaterialDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveMaterialDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveMaterialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
