import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-land',
  templateUrl: './header-land.component.html',
  styleUrls: ['./header-land.component.scss'],
})
export class HeaderLandComponent  implements OnInit {
  x = document.getElementById("nav");

  constructor() { }

  ngOnInit() {
  }

}
