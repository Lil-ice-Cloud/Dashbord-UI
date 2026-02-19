import { Component, HostListener, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Leftsidebar } from './left-sidebar/left-sidebar';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Leftsidebar, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth)

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }

  }

  changeIsLeftSidebarCollapsed(value: boolean): void {
    this.isLeftSidebarCollapsed.set(value);
  }
}
