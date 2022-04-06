import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveMemberPageComponent } from './approve-member-page.component';

describe('ApproveMemberPageComponent', () => {
  let component: ApproveMemberPageComponent;
  let fixture: ComponentFixture<ApproveMemberPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveMemberPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveMemberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
