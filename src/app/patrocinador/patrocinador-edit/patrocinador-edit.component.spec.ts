import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadorEditComponent } from './patrocinador-edit.component';

describe('PatrocinadorEditComponent', () => {
  let component: PatrocinadorEditComponent;
  let fixture: ComponentFixture<PatrocinadorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocinadorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
