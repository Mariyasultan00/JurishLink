import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasefilingPage } from './casefiling.page';

describe('CasefilingPage', () => {
  let component: CasefilingPage;
  let fixture: ComponentFixture<CasefilingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CasefilingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
