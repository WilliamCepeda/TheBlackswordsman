import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent], providers: [provideRouter([])] }).compileComponents();
  });

  it('creates the application', () => {
    expect(TestBed.createComponent(AppComponent).componentInstance).toBeTruthy();
  });
});
