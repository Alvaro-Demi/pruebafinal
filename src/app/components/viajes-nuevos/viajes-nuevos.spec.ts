import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajesNuevosComponent } from './viajes-nuevos.component';

describe('ViajesNuevosComponent', () => {
  let component: ViajesNuevosComponent;
  let fixture: ComponentFixture<ViajesNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViajesNuevosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViajesNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
