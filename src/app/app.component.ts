import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portus';
  links = [
    {
      "name": "Security Groups",
      "link": "security-groups"
    },
    {
      "name": "Audits",
      "link": "audits"
    }
  ];
}
