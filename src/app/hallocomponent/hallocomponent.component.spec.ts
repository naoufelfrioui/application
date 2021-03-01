import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallocomponentComponent } from './hallocomponent.component';

describe('HallocomponentComponent', () => {
  let component: HallocomponentComponent;
  let fixture: ComponentFixture<HallocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
