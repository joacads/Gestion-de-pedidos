import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRubroComponent } from './formulario-rubro.component';

describe('FormularioRubroComponent', () => {
  let component: FormularioRubroComponent;
  let fixture: ComponentFixture<FormularioRubroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioRubroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioRubroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
