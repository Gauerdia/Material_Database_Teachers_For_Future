import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetailCommentsComponent } from './private-detail-comments.component';

describe('PublicDetailCommentsComponent', () => {
  let component: PrivateDetailCommentsComponent;
  let fixture: ComponentFixture<PrivateDetailCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDetailCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetailCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
