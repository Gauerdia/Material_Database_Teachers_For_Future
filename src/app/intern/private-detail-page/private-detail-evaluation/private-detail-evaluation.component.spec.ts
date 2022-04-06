import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetailEvaluationComponent } from './private-detail-evaluation.component';

describe('PrivateDetailEvaluationComponent', () => {
  let component: PrivateDetailEvaluationComponent;
  let fixture: ComponentFixture<PrivateDetailEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDetailEvaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetailEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
