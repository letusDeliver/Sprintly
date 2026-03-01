import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MegaMenu } from 'primeng/megamenu';
import { AvatarModule } from 'primeng/avatar';
import { MegaMenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MegaMenu,
    ButtonModule,
    CommonModule,
    AvatarModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items: MegaMenuItem[] | undefined;

  constructor(public router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'DASHBOARD',
        icon: 'pi pi-home',
        routerLink: '/dashboard'
      },
      {
        label: 'PROJECTS',
        icon: 'pi pi-briefcase',
        items: [
          [
            {
              items: [
                {
                  label: 'All Projects',
                  icon: 'pi pi-briefcase',
                  routerLink: '/projects'
                },
                {
                  label: 'Create Project',
                  icon: 'pi pi-plus',
                  routerLink: '/projects/create'
                },
                {
                  label: 'Archived Projects',
                  icon: 'pi pi-folder',
                  routerLink: '/projects/archived'
                }
              ]
            }
          ]
        ]
      },
      {
        label: 'TICKETS',
        icon: 'pi pi-ticket',
        routerLink: '/tickets'
      },
      {
        label: 'REPORTS',
        icon: 'pi pi-chart-line',
        routerLink: '/reports'
      },
      {
        label: 'SETTINGS',
        icon: 'pi pi-cog',
        routerLink: '/settings'
      }
    ];
  }

  isParentActive(item: MegaMenuItem): boolean {
    if (!item.items) return false;

    return item.items.some(column =>
      column.some(group =>
        group.items?.some(child =>
          this.router.isActive(child.routerLink ?? '', {
            paths: 'subset',
            queryParams: 'ignored',
            matrixParams: 'ignored',
            fragment: 'ignored'
          })
        )
      )
    );
  }
}