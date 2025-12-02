import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bareact2Page } from './bareact2.page';

describe('Bareact2Page', () => {
  let component: Bareact2Page;
  let fixture: ComponentFixture<Bareact2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Bareact2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
