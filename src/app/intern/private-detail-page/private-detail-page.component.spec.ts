import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetailPageComponent } from './private-detail-page.component';

describe('PrivateDetailPageComponent', () => {
  let component: PrivateDetailPageComponent;
  let fixture: ComponentFixture<PrivateDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
