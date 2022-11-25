import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public web: string;

  constructor() {
    this.title = "Christian Sánchez";
    this.subtitle = "Desarrollador Web Junior"
    this.web = "csanchez.gefe1214@gmail.com"
   }

  ngOnInit(): void {
  }

}
