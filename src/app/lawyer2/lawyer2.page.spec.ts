import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lawyer2Page } from './lawyer2.page';

describe('Lawyer2Page', () => {
  let component: Lawyer2Page;
  let fixture: ComponentFixture<Lawyer2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lawyer2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
