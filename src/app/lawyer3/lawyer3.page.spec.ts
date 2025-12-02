import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lawyer3Page } from './lawyer3.page';

describe('Lawyer3Page', () => {
  let component: Lawyer3Page;
  let fixture: ComponentFixture<Lawyer3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lawyer3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
