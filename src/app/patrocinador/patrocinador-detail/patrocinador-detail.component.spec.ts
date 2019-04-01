import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatrocinadorDetailComponent } from './patrocinador-detail.component';

describe('PatrocinadorDetailComponent', () => {
  let component: PatrocinadorDetailComponent;
  let fixture: ComponentFixture<PatrocinadorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatrocinadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatrocinadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
