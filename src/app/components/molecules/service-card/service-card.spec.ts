import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCard } from './service-card';

describe('ServiceCard', () => {
  let component: ServiceCard;
  let fixture: ComponentFixture<ServiceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle selection', () => {
    component.toggleSelection(true);
    expect(component.isSelected).toBe(true);
    component.toggleSelection(false);
    expect(component.isSelected).toBe(false);
  })
});
