import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertHelperService {

  constructor(private snackbar: MatSnackBar) { }

  showAlertWithClose(message: string){
    this.snackbar.open(message, "close")
        .onAction()
        .subscribe(() => this.snackbar.dismiss() );
  }

}
