import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedLandingPageComponent } from './generated-landing-page.component';

describe('GeneratedLandingPageComponent', () => {
  let component: GeneratedLandingPageComponent;
  let fixture: ComponentFixture<GeneratedLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
