import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpDestinyComponent } from './sp-destiny.component';

describe('SpDestinyComponent', () => {
  let component: SpDestinyComponent;
  let fixture: ComponentFixture<SpDestinyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpDestinyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpDestinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
