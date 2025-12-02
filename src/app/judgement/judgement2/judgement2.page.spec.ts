import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Judgement2Page } from './judgement2.page';

describe('Judgment2Page', () => {
  let component: Judgement2Page;
  let fixture: ComponentFixture<Judgement2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Judgement2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
