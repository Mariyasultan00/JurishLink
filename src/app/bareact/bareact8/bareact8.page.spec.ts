import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bareact8Page } from './bareact8.page';

describe('Bareact8Page', () => {
  let component: Bareact8Page;
  let fixture: ComponentFixture<Bareact8Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Bareact8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
