import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificNavComponent } from './specific-nav.component';

describe('SpecificNavComponent', () => {
  let component: SpecificNavComponent;
  let fixture: ComponentFixture<SpecificNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
