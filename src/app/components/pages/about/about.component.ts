import { Component, OnInit } from '@angular/core';
import { SiteData } from 'src/assets/site-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  text: string = SiteData.about;

  constructor() { }

  ngOnInit() {
  }

}
