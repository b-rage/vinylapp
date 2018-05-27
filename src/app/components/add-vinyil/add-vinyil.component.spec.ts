import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVinyilComponent } from './add-vinyil.component';

describe('AddVinyilComponent', () => {
  let component: AddVinyilComponent;
  let fixture: ComponentFixture<AddVinyilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVinyilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVinyilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
