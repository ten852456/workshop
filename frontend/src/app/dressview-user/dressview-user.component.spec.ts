import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressviewUserComponent } from './dressview-user.component';

describe('DressviewUserComponent', () => {
  let component: DressviewUserComponent;
  let fixture: ComponentFixture<DressviewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressviewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressviewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
