import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestresetpasswordComponent } from './requestresetpassword.component';

describe('RequestresetpasswordComponent', () => {
  let component: RequestresetpasswordComponent;
  let fixture: ComponentFixture<RequestresetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestresetpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestresetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
