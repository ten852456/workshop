import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressviewComponent } from './dressview.component';

describe('DressviewComponent', () => {
  let component: DressviewComponent;
  let fixture: ComponentFixture<DressviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DressviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
