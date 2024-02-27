import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss'],
})
export class ProgramsComponent  implements OnInit {

  openModal(){
    this.dialogService.open()
  }

    
    constructor(private dialogService: DialogService) { }

  ngOnInit() {}

}
