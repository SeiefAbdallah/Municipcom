import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideServiceComponent } from './guide-service.component';

describe('GuideServiceComponent', () => {
  let component: GuideServiceComponent;
  let fixture: ComponentFixture<GuideServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
