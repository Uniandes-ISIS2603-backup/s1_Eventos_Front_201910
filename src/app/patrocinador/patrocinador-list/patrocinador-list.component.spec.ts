import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadorListComponent } from './patrocinador-list.component';

describe('PatrocinadorListComponent', () => {
  let component: PatrocinadorListComponent;
  let fixture: ComponentFixture<PatrocinadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocinadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
