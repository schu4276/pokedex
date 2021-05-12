import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesInfoComponent } from './abilities-info.component';

describe('AbilitiesInfoComponent', () => {
  let component: AbilitiesInfoComponent;
  let fixture: ComponentFixture<AbilitiesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbilitiesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitiesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
