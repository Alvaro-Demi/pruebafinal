import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesLista } from './viajes-lista';

describe('ViajesLista', () => {
  let component: ViajesLista;
  let fixture: ComponentFixture<ViajesLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViajesLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajesLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
