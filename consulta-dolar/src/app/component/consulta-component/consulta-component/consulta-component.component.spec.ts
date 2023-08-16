import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaComponentComponent } from './consulta-component.component';

describe('ConsultaComponentComponent', () => {
  let component: ConsultaComponentComponent;
  let fixture: ComponentFixture<ConsultaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
