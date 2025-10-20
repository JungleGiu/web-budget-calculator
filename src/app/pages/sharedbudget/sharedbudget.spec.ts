import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharedbudget } from './sharedbudget';

describe('Sharedbudget', () => {
  let component: Sharedbudget;
  let fixture: ComponentFixture<Sharedbudget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sharedbudget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sharedbudget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
