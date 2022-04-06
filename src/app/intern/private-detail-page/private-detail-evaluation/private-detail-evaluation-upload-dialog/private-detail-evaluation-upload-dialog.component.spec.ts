import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetailEvaluationUploadDialogComponent } from './private-detail-evaluation-upload-dialog.component';

describe('PrivateDetailEvaluationUploadDialogComponent', () => {
  let component: PrivateDetailEvaluationUploadDialogComponent;
  let fixture: ComponentFixture<PrivateDetailEvaluationUploadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDetailEvaluationUploadDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetailEvaluationUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
