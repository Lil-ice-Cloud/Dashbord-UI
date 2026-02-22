import { Component, input, output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule, NgClass } from "@angular/common";

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, NgClass],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.css',
})

export class Leftsidebar {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard',
    },
    {
      routeLink: 'calculator',
      icon: 'fal fa-calculator',
      label: 'Calculator',
    },
    {
      routeLink: 'products',
      icon: 'fal fa-box',
      label: 'Products',
    },

    {
      routeLink: 'people',
      icon: 'fal fa-users',
      label: 'People',
    },
    {
      routeLink: 'charts',
      icon: 'fal fa-chart-pie',
      label: 'Charts',
    },
    {
      routeLink: 'money',
      icon: 'fal fa-dollar-sign',
      label: 'Money',
    },
    {
      routeLink: 'delivery',
      icon: 'fal fa-truck',
      label: 'Delivery',
    },
    {
      routeLink: 'pages',
      icon: 'fal fa-file',
      label: 'Pages',
    },
    {
      routeLink: 'messegers',
      icon: 'fal fa-comment',
      label: 'Messegers',
    },
    {
      routeLink: 'network',
      icon: 'fal fa-network-wired',
      label: 'Network',
    },
    {
      routeLink: 'sing-out',
      icon: 'fal fa-sign-out-alt',
      label: 'Sing Out',
    }
  ];

  toggleCallapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
