import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirestrutsComponent } from './direstruts.component';

describe('DirestrutsComponent', () => {
  let component: DirestrutsComponent;
  let fixture: ComponentFixture<DirestrutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirestrutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirestrutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
