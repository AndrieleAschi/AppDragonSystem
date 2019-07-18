import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLogoffComponent } from './app-logoff.component';

describe('AppLogoffComponent', () => {
  let component: AppLogoffComponent;
  let fixture: ComponentFixture<AppLogoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLogoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLogoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
