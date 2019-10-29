import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compenent2Component } from './compenent2.component';

describe('Compenent2Component', () => {
  let component: Compenent2Component;
  let fixture: ComponentFixture<Compenent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compenent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compenent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
