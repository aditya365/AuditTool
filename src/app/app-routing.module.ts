import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SecurityGroupsComponent } from './security-groups/security-groups.component';
import { AuditComponent } from './audit/audit.component';

const routes: Route[] = [
  { path: 'security-groups', component: SecurityGroupsComponent },
  { path: 'audit', component: AuditComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
