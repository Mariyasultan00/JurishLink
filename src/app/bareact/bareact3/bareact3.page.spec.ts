import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bareact3Page } from './bareact3.page';

describe('Bareact3Page', () => {
  let component: Bareact3Page;
  let fixture: ComponentFixture<Bareact3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Bareact3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
