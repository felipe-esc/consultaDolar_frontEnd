import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotacaoComponentComponent } from './cotacao-component.component';

describe('CotacaoComponentComponent', () => {
  let component: CotacaoComponentComponent;
  let fixture: ComponentFixture<CotacaoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotacaoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotacaoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
