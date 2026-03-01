import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTickets } from './recent-tickets';

describe('RecentTickets', () => {
  let component: RecentTickets;
  let fixture: ComponentFixture<RecentTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentTickets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentTickets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
