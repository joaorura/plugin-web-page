import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginHomeComponent } from './plugin-home.component';

describe('PluginHomeComponent', () => {
  let component: PluginHomeComponent;
  let fixture: ComponentFixture<PluginHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
