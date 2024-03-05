import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-header-dash',
  templateUrl: './header-dash.component.html',
  styleUrls: ['./header-dash.component.scss'],
})
export class HeaderDashComponent  implements OnInit {

  constructor(private sessionSerivce: SessionService) { }

  ngOnInit() {}

  signOut(){
    this.sessionSerivce.salir()
  }

}
