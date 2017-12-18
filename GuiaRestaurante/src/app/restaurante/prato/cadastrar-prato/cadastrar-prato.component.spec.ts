import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPratoComponent } from './cadastrar-prato.component';

describe('CadastrarPratoComponent', () => {
  let component: CadastrarPratoComponent;
  let fixture: ComponentFixture<CadastrarPratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
