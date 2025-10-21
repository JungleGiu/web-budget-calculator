import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ProspectsList } from './prospects-list';

describe('ProspectsList', () => {
  let component: ProspectsList;
  let fixture: ComponentFixture<ProspectsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectsList],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProspectsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
