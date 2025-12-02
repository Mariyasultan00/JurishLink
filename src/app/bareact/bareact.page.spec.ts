import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BareactPage } from './bareact.page';

describe('BareactPage', () => {
  let component: BareactPage;
  let fixture: ComponentFixture<BareactPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BareactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
