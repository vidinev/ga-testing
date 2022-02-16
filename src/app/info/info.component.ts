import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (window as any).dataLayer.push({
      'event' : 'my_page_view',
      'loginStatus' : 'logged in',
      'pageType' : 'info'
    });
  }

}
