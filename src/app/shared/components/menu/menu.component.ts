import { Component } from '@angular/core';

interface MenuItem {
  path: string;
  title: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { path: '/maps/fullscreen', title: 'Fullscreen' },
    { path: '/maps/bookmarks', title: 'Marcadores' },
    { path: '/maps/zoom-range', title: 'Zoom range' },
    { path: '/maps/properties', title: 'Propiedades' },
  ];
  constructor() {}
}
