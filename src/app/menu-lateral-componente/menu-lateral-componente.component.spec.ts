import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralComponenteComponent } from './menu-lateral-componente.component';

describe('MenuLateralComponenteComponent', () => {
  let component: MenuLateralComponenteComponent;
  let fixture: ComponentFixture<MenuLateralComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLateralComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLateralComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
