import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogContent: string | null = null;

  constructor(private api: ApiService) { }

  async ngOnInit(): Promise<void> {
    const data = await this.api.getBlogContent();
    this.blogContent = data.content;
  }

}
