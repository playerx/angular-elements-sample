import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleShellComponent } from './module-shell.component';

describe('ModuleShellComponent', () => {
  let component: ModuleShellComponent;
  let fixture: ComponentFixture<ModuleShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
