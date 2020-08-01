import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {

  currentSearchType: number = 0;
  bgImage: string = null;

  constructor() { }

  ngOnInit(): void {
    this.getRandomBg();
  }

  getRandomBg() {
    this.bgImage = '../assets/search_bg/pet-bg-1.jpg';
  }

  selectSearchType(type: number): void {
    this.currentSearchType = type;
  }

}
