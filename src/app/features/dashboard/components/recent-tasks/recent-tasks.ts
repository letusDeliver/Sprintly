import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../../../core/models/tasks.model';

@Component({
  standalone: true,
  selector: 'app-recent-tasks',
  imports: [CommonModule],
  templateUrl: './recent-tasks.html',
  styleUrl: './recent-tasks.scss',
})
export class RecentTasks {
  constructor(private router: Router) {}

  tasks: Task[] = [
    {
      id: 'T101',
      projectId: 'P1',
      title: 'Design Login Screen',
      status: 'todo',
      priority: 'high',
      assignee: 'Kunal',
      dueDate: new Date(),
      createdAt: new Date(),
    },
    {
      id: 'T102',
      projectId: 'P2',
      title: 'API Integration',
      status: 'in-progress',
      priority: 'medium',
      assignee: 'Rahul',
      dueDate: new Date(),
      createdAt: new Date(),
    },
    {
      id: 'T103',
      projectId: 'P3',
      title: 'Update Documentation',
      status: 'done',
      priority: 'low',
      assignee: 'Amit',
      dueDate: new Date(),
      createdAt: new Date(),
    },
  ];

  navigateToTask(id: string) {
    this.router.navigate(['/tasks', id]);
  }

  formatStatus(status: string): string {
    return status.replace('-', ' ');
  }
}
