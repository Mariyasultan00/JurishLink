import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Document2Page } from './document2.page';

describe('Document2Page', () => {
  let component: Document2Page;
  let fixture: ComponentFixture<Document2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Document2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
