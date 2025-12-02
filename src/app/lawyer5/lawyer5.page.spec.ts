import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lawyer5Page } from './lawyer5.page';

describe('Lawyer5Page', () => {
  let component: Lawyer5Page;
  let fixture: ComponentFixture<Lawyer5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lawyer5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
