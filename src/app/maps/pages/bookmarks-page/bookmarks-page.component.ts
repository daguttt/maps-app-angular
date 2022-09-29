import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-bookmarks-page',
  templateUrl: './bookmarks-page.component.html',
  styles: [
    `
      .zoom-slider {
        position: fixed;
        bottom: 50px;
        padding-inline: 1rem;
        padding-block: 0.5rem;
        border-radius: 6px;
        background-color: #fff;
      }
    `,
  ],
})
export class BookmarksPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/streets-v11',
      container: 'map',
      center: [-75.59014152932845, 6.257038280924004],
      zoom: 16,
    });
  }
}
