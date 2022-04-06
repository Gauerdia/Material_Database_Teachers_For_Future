import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMaterialDialogComponent } from './new-material-dialog.component';

describe('NewMaterialDialogComponent', () => {
  let component: NewMaterialDialogComponent;
  let fixture: ComponentFixture<NewMaterialDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMaterialDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMaterialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
