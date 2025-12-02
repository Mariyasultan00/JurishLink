import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bareact4Page } from './bareact4.page';

describe('Bareact4Page', () => {
  let component: Bareact4Page;
  let fixture: ComponentFixture<Bareact4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Bareact4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
