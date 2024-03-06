import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { RedeemComponent } from '../components/redeem/redeem.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private matDialog: MatDialog) {}

  open(object: any) {
    this.matDialog.open(DialogComponent, {
      data: { object },
    });
  }

  redeem() {
    this.matDialog.open(RedeemComponent);
  }
}
