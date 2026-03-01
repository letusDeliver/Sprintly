import { Component, computed, inject, signal } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ProjectService } from '../../core/services/project.service';
import { TicketService } from '../../core/services/ticket.service';
import { KpiCards } from './components/kpi-cards/kpi-cards';
import { RecentTickets } from './components/recent-tickets/recent-tickets';
import { RecentTasks } from './components/recent-tasks/recent-tasks';
import { RecentProjects } from './components/recent-projects/recent-projects';
import { ProductivityChart } from './components/productivity-chart/productivity-chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, KpiCards, RecentTickets, RecentTasks, RecentProjects, ProductivityChart],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  constructor() {}
}
