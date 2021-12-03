import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRescuesComponent } from './crud-rescues.component';

describe('CrudRescuesComponent', () => {
  let component: CrudRescuesComponent;
  let fixture: ComponentFixture<CrudRescuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRescuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudRescuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
