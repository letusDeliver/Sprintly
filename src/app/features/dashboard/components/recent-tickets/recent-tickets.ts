import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../../../../core/models/ticket.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-recent-tickets',
  imports: [CommonModule],
  templateUrl: './recent-tickets.html',
  styleUrl: './recent-tickets.scss',
})
export class RecentTickets {
  constructor(private router: Router) {}

  tickets: Ticket[] = [
    {
      id: '1024',
      projectId: 'P1',
      title: 'Fix Login Issue',
      description: '',
      type: 'bug',
      priority: 'high',
      status: 'todo',
      assignee: 'Kunal',
      createdAt: new Date(),
    },
    {
      id: '1023',
      projectId: 'P2',
      title: 'Create Payment API',
      description: '',
      type: 'story',
      priority: 'medium',
      status: 'in-progress',
      assignee: 'Rahul',
      createdAt: new Date(),
    },
    {
      id: '1022',
      projectId: 'P3',
      title: 'Improve Dashboard UI',
      description: '',
      type: 'task',
      priority: 'low',
      status: 'done',
      assignee: 'Amit',
      createdAt: new Date(),
    },
  ];

  navigateToTicket(id: string) {
    this.router.navigate(['/tickets', id]);
  }

  formatStatus(status: string): string {
    return status.replace('-', ' ');
  }
}
