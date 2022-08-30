import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingUniComponent } from './binding-uni.component';

describe('BindingUniComponent', () => {
  let component: BindingUniComponent;
  let fixture: ComponentFixture<BindingUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingUniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
