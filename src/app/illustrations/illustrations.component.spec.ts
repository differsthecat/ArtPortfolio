import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustrationsComponent } from './illustrations.component';

describe('IllustrationsComponent', () => {
  let component: IllustrationsComponent;
  let fixture: ComponentFixture<IllustrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllustrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllustrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
