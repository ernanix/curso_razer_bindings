import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingBiComponent } from './binding-bi.component';

describe('BindingBiComponent', () => {
  let component: BindingBiComponent;
  let fixture: ComponentFixture<BindingBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingBiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
