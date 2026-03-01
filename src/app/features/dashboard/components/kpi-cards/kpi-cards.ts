import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-kpi-cards',
  imports: [RouterLink, CommonModule],
  templateUrl: './kpi-cards.html',
  styleUrl: './kpi-cards.scss',
})
export class KpiCards {
  constructor(private router: Router) {}

  kpis = [
    {
      title: 'Total Tickets',
      value: 128,
      subtitle: '+8 this week',
      route: '/tickets',
    },
    {
      title: 'Total Tasks',
      value: 42,
      subtitle: '12 pending',
      route: '/tasks',
    },
    {
      title: 'Active Projects',
      value: 6,
      subtitle: '2 completed this month',
      route: '/projects',
    },
    {
      title: 'Productivity',
      value: '84%',
      subtitle: 'This Month',
      route: '/reports',
    },
  ];
}
