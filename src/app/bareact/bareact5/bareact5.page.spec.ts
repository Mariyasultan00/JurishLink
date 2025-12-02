import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bareact5Page } from './bareact5.page';

describe('Bareact5Page', () => {
  let component: Bareact5Page;
  let fixture: ComponentFixture<Bareact5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Bareact5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
