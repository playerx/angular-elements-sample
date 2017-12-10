import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-shell',
  templateUrl: './module-shell.component.html',
  styleUrls: ['./module-shell.component.scss'],
})
export class ModuleShellComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // first navigation not fired when loading in web component
    this.router.navigate(['/page1']);
  }

}
