import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPeopleListComponent } from './saved-people-list.component';

describe('SavedPeopleListComponent', () => {
  let component: SavedPeopleListComponent;
  let fixture: ComponentFixture<SavedPeopleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedPeopleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
