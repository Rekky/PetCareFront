import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {

  currentSearchType: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectSearchType(type: number): void {
    this.currentSearchType = type;
  }

}
