import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./dialog/dialog.component";
import { SecurityGroupsComponent } from "./security-groups/security-groups.component";
import { OverlayContainer } from "@angular/cdk/overlay";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Security Groups Audit Tool";
  isDarkTheme: boolean = false;
  links = [
    {
      name: "Security Groups",
      link: "security-groups",
    },
    {
      name: "Audit",
      link: "audits",
    },
  ];

  constructor(
    public dialog: MatDialog,
    public overlayContainer: OverlayContainer
  ) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: "80%",
      data: { component: SecurityGroupsComponent },
    });
  }

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem("theme") === "Dark" ? true : false;
    if (!this.isDarkTheme) {
      this.overlayContainer
        .getContainerElement()
        .classList.remove("dark-theme-mode");
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.add("dark-theme-mode");
    }
  }

  storeThemeSelection() {
    localStorage.setItem("theme", this.isDarkTheme ? "Dark" : "Light");
    console.log(this.isDarkTheme);
    if (!this.isDarkTheme) {
      this.overlayContainer
        .getContainerElement()
        .classList.remove("dark-theme-mode");
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.add("dark-theme-mode");
    }
  }
}
