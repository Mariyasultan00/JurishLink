import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JudgementPage } from './judgement.page';

describe('JudgementPage', () => {
  let component: JudgementPage;
  let fixture: ComponentFixture<JudgementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
