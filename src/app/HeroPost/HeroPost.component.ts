import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-HeroPost',
  templateUrl: './HeroPost.component.html',
  styleUrls: ['./HeroPost.component.scss']
})
export class HeroPostComponent implements OnInit {

  tiles: string[] = [];

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 4; index++) {
      this.tiles.push('1');
    }
  }

}
