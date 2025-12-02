import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bareact1Page } from './bareact1.page';

describe('Bareact1Page', () => {
  let component: Bareact1Page;
  let fixture: ComponentFixture<Bareact1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Bareact1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
