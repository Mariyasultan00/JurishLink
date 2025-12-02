import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bareact6Page } from './bareact6.page';

describe('Bareact6Page', () => {
  let component: Bareact6Page;
  let fixture: ComponentFixture<Bareact6Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Bareact6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
