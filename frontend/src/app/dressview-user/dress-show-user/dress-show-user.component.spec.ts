import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressShowUserComponent } from './dress-show-user.component';

describe('DressShowUserComponent', () => {
  let component: DressShowUserComponent;
  let fixture: ComponentFixture<DressShowUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressShowUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressShowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
