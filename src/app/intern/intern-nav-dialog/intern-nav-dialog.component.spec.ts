import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternNavDialogComponent } from './intern-nav-dialog.component';

describe('InternNavDialogComponent', () => {
  let component: InternNavDialogComponent;
  let fixture: ComponentFixture<InternNavDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternNavDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternNavDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
