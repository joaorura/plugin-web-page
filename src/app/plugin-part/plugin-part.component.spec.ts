import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginPartComponent } from './plugin-part.component';

describe('PluginPartComponent', () => {
  let component: PluginPartComponent;
  let fixture: ComponentFixture<PluginPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
