import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Client3Page } from './client3.page';

describe('Client3Page', () => {
  let component: Client3Page;
  let fixture: ComponentFixture<Client3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Client3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
