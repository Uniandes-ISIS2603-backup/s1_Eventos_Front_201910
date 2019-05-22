import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadoDetailComponent } from './invitado-detail.component';

describe('InvitadoDetailComponent', () => {
  let component: InvitadoDetailComponent;
  let fixture: ComponentFixture<InvitadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
