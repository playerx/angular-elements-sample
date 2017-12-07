import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from 'selenium-webdriver';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent implements OnInit {

  @Input()
  likes: number;

  @Output()
  liked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.likes++;
    this.liked.emit(this.likes);
  }
}
