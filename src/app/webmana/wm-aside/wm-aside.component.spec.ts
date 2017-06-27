import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmAsideComponent } from './wm-aside.component';

describe('WmAsideComponent', () => {
  let component: WmAsideComponent;
  let fixture: ComponentFixture<WmAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
