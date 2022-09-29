import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styles: [],
})
export class FullScreenPageComponent implements AfterViewInit {
  map!: mapboxgl.Map;

  @ViewChild('map') mapElement!: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-75.59014152932845, 6.257038280924004],
      zoom: 16,
    });
  }
}
