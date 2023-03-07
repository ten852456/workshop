import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressAddEditComponent } from './dress-add-edit.component';

describe('DressAddEditComponent', () => {
  let component: DressAddEditComponent;
  let fixture: ComponentFixture<DressAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
