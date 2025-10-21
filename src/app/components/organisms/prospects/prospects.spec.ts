import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { Prospects } from './prospects';

describe('Prospects', () => {
  let component: Prospects;
  let fixture: ComponentFixture<Prospects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prospects],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prospects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
