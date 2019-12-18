import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfRegisterFormComponent } from './rf-register-form.component';

describe('RfRegisterFormComponent', () => {
  let component: RfRegisterFormComponent;
  let fixture: ComponentFixture<RfRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
