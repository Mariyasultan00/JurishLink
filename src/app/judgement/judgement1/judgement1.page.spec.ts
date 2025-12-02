import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Judgement1Page } from './judgement1.page';

describe('Judgment1Page', () => {
  let component: Judgement1Page;
  let fixture: ComponentFixture<Judgement1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Judgement1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
