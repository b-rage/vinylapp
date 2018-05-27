import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylsComponent } from './vinyls.component';

describe('VinylsComponent', () => {
  let component: VinylsComponent;
  let fixture: ComponentFixture<VinylsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
