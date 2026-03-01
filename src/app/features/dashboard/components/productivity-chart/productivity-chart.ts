import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { SelectModule } from 'primeng/select';


@Component({
  standalone: true,
  selector: 'app-productivity-chart',
  imports: [ChartModule, CommonModule, SelectModule, FormsModule],
  templateUrl: './productivity-chart.html',
  styleUrl: './productivity-chart.scss',
})
export class ProductivityChart {
  selectedRange = 'week';

  ranges = [
    { label: 'This Week', value: 'week' },
    { label: 'This Month', value: 'month' },
    { label: 'This Year', value: 'year' },
  ];

  chartData: any;
  chartOptions: any;

  ngOnInit() {
    this.initializeChart();
  }

  initializeChart() {
    this.chartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Completed Tasks',
          data: [4, 6, 3, 8, 5, 7, 9],
          fill: false,
          tension: 0.4,
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            color: '#f1f5f9',
          },
        },
      },
    };
  }

  onRangeChange() {
    if (this.selectedRange === 'week') {
      this.chartData.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      this.chartData.datasets[0].data = [4, 6, 3, 8, 5, 7, 9];
    }

    if (this.selectedRange === 'month') {
      this.chartData.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      this.chartData.datasets[0].data = [22, 35, 28, 40];
    }

    if (this.selectedRange === 'year') {
      this.chartData.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      this.chartData.datasets[0].data = [120, 140, 160, 150, 180, 200];
    }

    this.chartData = { ...this.chartData };
  }
}
