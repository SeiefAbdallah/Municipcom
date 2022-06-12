import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirconscriptionComponent } from './circonscription.component';

describe('CirconscriptionComponent', () => {
  let component: CirconscriptionComponent;
  let fixture: ComponentFixture<CirconscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirconscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirconscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
