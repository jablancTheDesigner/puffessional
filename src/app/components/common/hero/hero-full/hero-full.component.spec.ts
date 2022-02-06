import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFullComponent } from './hero-full.component';

describe('HeroFullComponent', () => {
  let component: HeroFullComponent;
  let fixture: ComponentFixture<HeroFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
