import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityGroupsComponent } from './security-groups/security-groups.component';
import { SecurityGroupsService } from './security-groups/security-groups.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { SecurityGroupsDuplicateComponent } from './security-groups-duplicate/security-groups-duplicate.component';
import { SecurityGroupDetailsComponent } from './security-groups/security-group-details/security-group-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SecurityGroupsComponent,
    SecurityGroupsDuplicateComponent,
    SecurityGroupDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    SecurityGroupsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SecurityGroupsComponent
  ],
})
export class AppModule { }
