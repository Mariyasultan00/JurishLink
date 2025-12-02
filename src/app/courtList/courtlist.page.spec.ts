import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourtListPage } from './courtlist.page';

describe('CourtlistPage', () => {
  let component: CourtListPage;
  let fixture: ComponentFixture<CourtListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
