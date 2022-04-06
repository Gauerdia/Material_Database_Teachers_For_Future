import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetailEvaluationDialogComponent } from './private-detail-evaluation-dialog.component';

describe('PrivateDetailEvaluationDialogComponent', () => {
  let component: PrivateDetailEvaluationDialogComponent;
  let fixture: ComponentFixture<PrivateDetailEvaluationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDetailEvaluationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetailEvaluationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
