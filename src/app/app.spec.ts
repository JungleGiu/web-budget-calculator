import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
  it ('should render header',() => {
 const fixture = TestBed.createComponent(App);
 fixture.detectChanges();
 const compiled = fixture.nativeElement;
 expect(compiled.querySelector('app-header')).toBeTruthy();
  })
  it ('should render hero',() => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-hero')).toBeTruthy();
     })
});
