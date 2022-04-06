import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDetailGeneralInformationComponent } from './public-detail-general-information.component';

describe('PublicDetailGeneralInformationComponent', () => {
  let component: PublicDetailGeneralInformationComponent;
  let fixture: ComponentFixture<PublicDetailGeneralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDetailGeneralInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDetailGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
