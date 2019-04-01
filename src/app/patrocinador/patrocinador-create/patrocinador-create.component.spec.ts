import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadorCreateComponent } from './patrocinador-create.component';

describe('PatrocinadorCreateComponent', () => {
  let component: PatrocinadorCreateComponent;
  let fixture: ComponentFixture<PatrocinadorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocinadorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
