import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {

  public Width: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.Width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.Width = window.innerWidth;
  }

}
