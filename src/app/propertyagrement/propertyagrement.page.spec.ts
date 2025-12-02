import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PropertyagrementPage } from './propertyagrement.page';

describe('PropertyagrementPage', () => {
  let component: PropertyagrementPage;
  let fixture: ComponentFixture<PropertyagrementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyagrementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
