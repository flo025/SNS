import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescuersListComponent } from './rescuers-list.component';

describe('RescuersListComponent', () => {
  let component: RescuersListComponent;
  let fixture: ComponentFixture<RescuersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescuersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RescuersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
