import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRescuerComponent } from './crud-rescuer.component';

describe('CrudRescuerComponent', () => {
  let component: CrudRescuerComponent;
  let fixture: ComponentFixture<CrudRescuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudRescuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudRescuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
