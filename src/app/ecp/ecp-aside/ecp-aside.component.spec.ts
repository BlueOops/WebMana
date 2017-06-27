import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcpAsideComponent } from './ecp-aside.component';

describe('EcpAsideComponent', () => {
  let component: EcpAsideComponent;
  let fixture: ComponentFixture<EcpAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcpAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcpAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
