import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection , signal} from '@angular/core';
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
    component.isSubmitted = signal(false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should render a service-card for each product in Products array',() => {
   component.products = Products;
   fixture.detectChanges();
   const serviceCards = fixture.nativeElement.querySelectorAll('app-service-card');
   expect(serviceCards.length).toEqual(Products.length);
  })
});
