import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  like = 0;

  likeThis() {
    this.like++;
  }

  disLike() {
    if (this.like == 0) {
      this.like = 0;
    } else {
      this.like--;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
