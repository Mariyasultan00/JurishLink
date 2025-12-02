import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Client2Page } from './client2.page';

describe('Client2Page', () => {
  let component: Client2Page;
  let fixture: ComponentFixture<Client2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Client2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
