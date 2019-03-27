import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadosListComponent } from './invitados-list.component';

describe('InvitadosListComponent', () => {
  let component: InvitadosListComponent;
  let fixture: ComponentFixture<InvitadosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitadosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
