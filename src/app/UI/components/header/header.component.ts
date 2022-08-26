import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  colorCircleSmall: string[] = ['red', '#fecb02', '#2ef801'];
  constructor() {}

  ngOnInit(): void {}
}
