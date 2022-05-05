import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  public leftbarShown: boolean = false;
  public vh: number = 0;

  constructor() { }

  ngOnInit() {
    this.resize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.resize();
  }

  private resize() {
    this.vh = window.innerHeight / 100;
    let d = document.getElementById("screen");
    if (d) {
      d.style.setProperty('--vh', `${this.vh}px`);
    }
  }

  onMenuClicked($event: string) {
    this.leftbarShown = true;
  }

  onMenuClosed($event: string) {
    this.leftbarShown = false;
  }

}
