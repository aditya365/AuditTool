import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Security Groups Audit Tool';
  links = [
    {
      "name": "Security Groups",
      "link": "security-groups"
    },
    {
      "name": "Audit",
      "link": "audits"
    }
  ];
}
