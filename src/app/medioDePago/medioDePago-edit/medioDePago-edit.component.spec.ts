import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioDePagoEditComponent } from './medio-de-pago-edit.component';

describe('MedioDePagoEditComponent', () => {
  let component: MedioDePagoEditComponent;
  let fixture: ComponentFixture<MedioDePagoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioDePagoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedioDePagoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
