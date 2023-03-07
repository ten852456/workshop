import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressShowComponent } from './dress-show.component';

describe('DressShowComponent', () => {
  let component: DressShowComponent;
  let fixture: ComponentFixture<DressShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
