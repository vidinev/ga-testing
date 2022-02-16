import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (window as any).dataLayer.push({
      'event' : 'my_page_view',
      'loginStatus' : 'logged in',
      'pageType' : 'news'
    });
  }

}
