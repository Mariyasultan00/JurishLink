import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lawyer1Page } from './lawyer1.page';

describe('Lawyer1Page', () => {
  let component: Lawyer1Page;
  let fixture: ComponentFixture<Lawyer1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lawyer1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
