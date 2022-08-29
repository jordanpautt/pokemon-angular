import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerLoad {
  constructor(private spinner: NgxSpinnerService) {}

  show(name: string): void {
    this.spinner.show(name, {
      type: 'ball-scale-multiple',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  }

  hide(name: string): void {
    setTimeout(() => {
      this.spinner.hide(name);
    }, 1000);
  }
}
