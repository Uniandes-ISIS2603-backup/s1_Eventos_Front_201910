    
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioDePagoCreateComponent } from './medioDePago-create.component';

describe('MedioDePagoCreateComponent', () => {
  let component: MedioDePagoCreateComponent;
  let fixture: ComponentFixture<MedioDePagoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioDePagoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedioDePagoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});