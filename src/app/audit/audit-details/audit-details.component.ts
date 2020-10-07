import { Component, OnInit, Inject, ViewChild, AfterViewInit,Input } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialog} from '@angular/material/dialog';
import { AuditService } from '../audit.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Change } from '../models/changes.model';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { SecurityGroupDetailsComponent } from 'src/app/security-groups/security-group-details/security-group-details.component';
import { SecurityGroupsService } from 'src/app/security-groups/security-groups.service';

@Component({
  selector: 'app-audit-details',
  templateUrl: './audit-details.component.html',
  styleUrls: ['./audit-details.component.css']
})
export class AuditDetailsComponent implements OnInit, AfterViewInit {
  details: any[]=[];
  @Input() groupIds;
  changeColumns = [
    {
      key: 'resource',
      displayName: 'Resource'
    },
    {
      key: 'protocol',
      displayName: 'Protocol'
    },
    {
      key: 'port',
      displayName: 'Port'
    },
    {
      key: 'direction',
      displayName: 'Direction'
    },
    {
      key: 'lastEditedBy',
      displayName: 'Last Edited By'
    },
    {
      key: 'updatedTime',
      displayName: 'Updated Time'
    }];

  changeDataSources: MatTableDataSource<Change>[]=[];
  //securityGroupsService: any;

  // @ViewChild('changeTable', { read: MatSort, static: true }) changeTableSort: MatSort;

  // @ViewChild('changeTablePaginator') changeTablePaginator: MatPaginator;

  constructor(
    //@Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private securityGroupsService: SecurityGroupsService,
    private auditsService: AuditService
    ) { }

  ngOnInit(): void {
    console.log(this.groupIds);
   // this.data.groupIds.forEach(groupId => {
    this.groupIds.forEach(groupId => {

      this.auditsService.getAuditDetails(groupId).subscribe((details) => {
        this.details.push(details);
        const tableSource = new MatTableDataSource<Change>(details?.Changes);
        // tableSource.paginator = this.changeTablePaginator[];
        // tableSource.sort = this.changeTableSort;
        this.changeDataSources.push(tableSource);
      });
    });
  }
  OpenSecurityDetails(row){
    console.log(row);
    this.securityGroupsService.setSelectedSecurityGroupId(row.resource);
    console.log(row.resource)
    let dialogRef = this.dialog.open(DialogComponent, {
      width: "80%",
      data: { component: SecurityGroupDetailsComponent },
    });
  }

  getChangeColumnKeys() {
    return this.changeColumns.map(c => c.key);
  }

  ngAfterViewInit() {
  }
}
