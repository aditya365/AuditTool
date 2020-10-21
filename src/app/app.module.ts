import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityGroupsComponent } from './security-groups/security-groups.component';
import { SecurityGroupsService } from './security-groups/security-groups.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { SecurityGroupDetailsComponent } from './security-groups/security-group-details/security-group-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuditComponent } from './audit/audit.component';
import { AppRoutingModule } from './app-routing.module';
import { AuditDetailsComponent } from './audit/audit-details/audit-details.component';
import { DialogComponent } from './dialog/dialog.component';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import {OverlayContainer} from '@angular/cdk/overlay';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SecurityGroupsComponent,
    SecurityGroupDetailsComponent,
    AuditComponent,
    AuditDetailsComponent,
    DialogComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,


    FormsModule,
    NgxDaterangepickerMd.forRoot()


  ],
  providers: [
    SecurityGroupsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SecurityGroupsComponent,DialogComponent
  ],
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('dark-theme-mode');
}
 }
