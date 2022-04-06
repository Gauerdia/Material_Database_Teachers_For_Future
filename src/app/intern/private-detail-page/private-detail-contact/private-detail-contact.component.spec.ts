import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetailContactComponent } from './private-detail-contact.component';

describe('PublicDetailContactComponent', () => {
  let component: PrivateDetailContactComponent;
  let fixture: ComponentFixture<PrivateDetailContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDetailContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetailContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
