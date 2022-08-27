import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  colorCircleSmall: string[] = ['red', '#fecb02', '#2ef801'];
  constructor(private router: Router) {}

  pageHome(): void {
    this.router.navigate(['/home']);
  }
}
