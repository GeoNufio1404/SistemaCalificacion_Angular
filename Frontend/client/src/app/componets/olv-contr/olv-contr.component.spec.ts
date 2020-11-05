import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvContrComponent } from './olv-contr.component';

describe('OlvContrComponent', () => {
  let component: OlvContrComponent;
  let fixture: ComponentFixture<OlvContrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlvContrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlvContrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
