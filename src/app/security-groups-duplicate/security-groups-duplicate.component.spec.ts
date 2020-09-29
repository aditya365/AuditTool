import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityGroupsDuplicateComponent } from './security-groups-duplicate.component';

describe('SecurityGroupsDuplicateComponent', () => {
  let component: SecurityGroupsDuplicateComponent;
  let fixture: ComponentFixture<SecurityGroupsDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityGroupsDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityGroupsDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
