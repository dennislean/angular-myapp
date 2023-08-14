import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqresUserComponent } from './reqres-user.component';

describe('ReqresUserComponent', () => {
  let component: ReqresUserComponent;
  let fixture: ComponentFixture<ReqresUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqresUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqresUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
