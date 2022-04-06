import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageCreateCategorySelectionItemDialogComponent } from './profile-page-create-category-selection-item-dialog.component';

describe('ProfilePageCreateCategorySelectionItemDialogComponent', () => {
  let component: ProfilePageCreateCategorySelectionItemDialogComponent;
  let fixture: ComponentFixture<ProfilePageCreateCategorySelectionItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePageCreateCategorySelectionItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageCreateCategorySelectionItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
