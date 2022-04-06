import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarLoggedOutComponent } from './toolbar-logged-out.component';

describe('ToolbarLoggedOutComponent', () => {
  let component: ToolbarLoggedOutComponent;
  let fixture: ComponentFixture<ToolbarLoggedOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarLoggedOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarLoggedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
