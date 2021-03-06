import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor() {
  }

  ngOnInit() {
  }

}
