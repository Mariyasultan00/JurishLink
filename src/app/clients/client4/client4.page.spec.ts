import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Client4Page } from './client4.page';

describe('Client4Page', () => {
  let component: Client4Page;
  let fixture: ComponentFixture<Client4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Client4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
