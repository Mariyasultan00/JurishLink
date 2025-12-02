import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Document1Page } from './document1.page';

describe('Document1Page', () => {
  let component: Document1Page;
  let fixture: ComponentFixture<Document1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Document1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
