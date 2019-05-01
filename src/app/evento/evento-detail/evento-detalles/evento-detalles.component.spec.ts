import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDetallesComponent } from './evento-detalles.component';

describe('EventoDetallesComponent', () => {
  let component: EventoDetallesComponent;
  let fixture: ComponentFixture<EventoDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
