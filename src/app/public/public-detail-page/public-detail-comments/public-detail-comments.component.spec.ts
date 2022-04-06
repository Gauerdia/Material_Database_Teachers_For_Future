import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDetailCommentsComponent } from './public-detail-comments.component';

describe('PublicDetailCommentsComponent', () => {
  let component: PublicDetailCommentsComponent;
  let fixture: ComponentFixture<PublicDetailCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDetailCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDetailCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
