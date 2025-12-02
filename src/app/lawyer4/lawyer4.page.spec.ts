import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lawyer4Page } from './lawyer4.page';

describe('Lawyer4Page', () => {
  let component: Lawyer4Page;
  let fixture: ComponentFixture<Lawyer4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lawyer4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
