import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMaterialPageComponent } from './new-material-page.component';

describe('NewMaterialPageComponent', () => {
  let component: NewMaterialPageComponent;
  let fixture: ComponentFixture<NewMaterialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMaterialPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMaterialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
