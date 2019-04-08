import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedioDePagoDetailComponent } from './medioDePago-detail.component';

describe('MedioDePagoDetailComponent', () => {
  let component: MedioDePagoDetailComponent;
  let fixture: ComponentFixture<MedioDePagoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioDePagoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedioDePagoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});