import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Elements Demo';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // first navigation not fired when loading in web component
    this.router.navigate(['/page1']);
  }

  openGithub() {
    window.open('https://github.com/playerx/angular-elements-sample');
  }

}
