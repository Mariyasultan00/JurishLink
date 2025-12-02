import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Client1Page } from './client1.page';

describe('Client1Page', () => {
  let component: Client1Page;
  let fixture: ComponentFixture<Client1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Client1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
