import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoPesquisaComponent } from './estado-pesquisa.component';

describe('EstadoPesquisaComponent', () => {
  let component: EstadoPesquisaComponent;
  let fixture: ComponentFixture<EstadoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
