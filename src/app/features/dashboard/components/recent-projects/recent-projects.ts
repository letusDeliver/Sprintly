import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../../../core/models/project.model';

@Component({
  standalone: true,
  selector: 'app-recent-projects',
  imports: [CommonModule],
  templateUrl: './recent-projects.html',
  styleUrl: './recent-projects.scss',
})
export class RecentProjects {
  constructor(private router: Router) {}

  projects: Project[] = [
    {
      id: 'P1',
      name: 'Sprintly Admin Panel',
      status: 'active',
      progress: 65,
      startDate: new Date(),
      endDate: new Date(),
      membersCount: 5,
      createdAt: new Date(),
    },
    {
      id: 'P2',
      name: 'Payment Integration',
      status: 'on-hold',
      progress: 40,
      startDate: new Date(),
      membersCount: 3,
      createdAt: new Date(),
    },
    {
      id: 'P3',
      name: 'Mobile App UI',
      status: 'completed',
      progress: 100,
      startDate: new Date(),
      endDate: new Date(),
      membersCount: 4,
      createdAt: new Date(),
    },
  ];

  navigateToProject(id: string) {
    this.router.navigate(['/projects', id]);
  }
}
