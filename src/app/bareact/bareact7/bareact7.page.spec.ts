import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bareact7Page } from './bareact7.page';

describe('Bareact7Page', () => {
  let component: Bareact7Page;
  let fixture: ComponentFixture<Bareact7Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Bareact7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
