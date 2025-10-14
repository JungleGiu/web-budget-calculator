import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ServicesList } from './services-list';

describe('ServicesList', () => {
  let component: ServicesList;
  let fixture: ComponentFixture<ServicesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesList],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
