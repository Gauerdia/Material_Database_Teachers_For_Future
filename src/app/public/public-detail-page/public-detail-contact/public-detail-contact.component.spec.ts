import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDetailContactComponent } from './public-detail-contact.component';

describe('PublicDetailContactComponent', () => {
  let component: PublicDetailContactComponent;
  let fixture: ComponentFixture<PublicDetailContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDetailContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDetailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
