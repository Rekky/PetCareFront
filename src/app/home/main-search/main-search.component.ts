import { Component, OnInit } from '@angular/core';
import {ToolsService} from '../../../shared/services/tools.service';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss']
})
export class MainSearchComponent implements OnInit {

  currentSearchType: number = 0;
  bgImage: string = null;
  tabSelected: number = 0;

  constructor(private tools: ToolsService) { }

  ngOnInit(): void {
    this.getRandomBg();
  }

  search() {
    console.log('entra search');
  }

  getRandomBg() {
    const randomNumber = this.tools.getRandomInt(1, 3);
    this.bgImage = `../assets/search_bg/pet-bg-${randomNumber}.jpg`;
  }

  selectSearchType(type: number): void {
    this.currentSearchType = type;
  }

}
