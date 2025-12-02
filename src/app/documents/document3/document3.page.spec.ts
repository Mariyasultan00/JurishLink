import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Document3Page } from './document3.page';

describe('Document3Page', () => {
  let component: Document3Page;
  let fixture: ComponentFixture<Document3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Document3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
