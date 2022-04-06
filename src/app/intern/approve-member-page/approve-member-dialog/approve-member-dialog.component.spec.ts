import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveMemberDialogComponent } from './approve-member-dialog.component';

describe('ApproveMemberDialogComponent', () => {
  let component: ApproveMemberDialogComponent;
  let fixture: ComponentFixture<ApproveMemberDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveMemberDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
