import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemprefvarComponent } from './temprefvar.component';

describe('TemprefvarComponent', () => {
  let component: TemprefvarComponent;
  let fixture: ComponentFixture<TemprefvarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemprefvarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemprefvarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
