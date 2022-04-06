import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDetailContactDialogComponent } from './public-detail-contact-dialog.component';

describe('PublicDetailContactDialogComponent', () => {
  let component: PublicDetailContactDialogComponent;
  let fixture: ComponentFixture<PublicDetailContactDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDetailContactDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDetailContactDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
