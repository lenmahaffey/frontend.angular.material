import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertManagerComponent } from './alert-manager.component';

describe('AlertManagerComponent', () => {
  let component: AlertManagerComponent;
  let fixture: ComponentFixture<AlertManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertManagerComponent]
    });
    fixture = TestBed.createComponent(AlertManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
