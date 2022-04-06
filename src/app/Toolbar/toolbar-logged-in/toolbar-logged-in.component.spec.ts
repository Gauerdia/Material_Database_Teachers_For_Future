import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLoggedInComponent } from './toolbar-logged-in.component';

describe('ToolbarLoggedInComponent', () => {
  let component: ToolbarLoggedInComponent;
  let fixture: ComponentFixture<ToolbarLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarLoggedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
