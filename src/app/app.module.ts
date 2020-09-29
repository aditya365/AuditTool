import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecurityGroupsComponent } from './security-groups/security-groups.component';
import { SecurityGroupsService } from './security-groups/security-groups.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { SecurityGroupsDuplicateComponent } from './security-groups-duplicate/security-groups-duplicate.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurityGroupsComponent,
    SecurityGroupsDuplicateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    SecurityGroupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
