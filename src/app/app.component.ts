import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { SecurityGroupsComponent } from './security-groups/security-groups.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Security Groups Audit Tool';
  isDarkTheme : boolean =false;
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

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '80%',
      data: { component:  SecurityGroupsComponent}
    });    
  }
  
  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }
}
