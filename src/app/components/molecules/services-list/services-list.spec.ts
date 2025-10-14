import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { ServicesList } from './services-list';
import { Products } from '../../../models/product';
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
  it ('should render a service-card for each product in Products array',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-service-card')).toBeTruthy();
    expect(compiled.querySelectorAll('app-service-card').length).toEqual(Products.length);
  })
});
