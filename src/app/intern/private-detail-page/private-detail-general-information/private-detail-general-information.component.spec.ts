import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetailGeneralInformationComponent } from './private-detail-general-information.component';

describe('PublicDetailGeneralInformationComponent', () => {
  let component: PrivateDetailGeneralInformationComponent;
  let fixture: ComponentFixture<PrivateDetailGeneralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDetailGeneralInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetailGeneralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
