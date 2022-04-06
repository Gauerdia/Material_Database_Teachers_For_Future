import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDetailPageComponent } from './public-detail-page.component';

describe('PublicDetailPageComponent', () => {
  let component: PublicDetailPageComponent;
  let fixture: ComponentFixture<PublicDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
