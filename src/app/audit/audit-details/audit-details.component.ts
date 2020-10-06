import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuditService } from '../audit.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Change } from '../models/changes.model';

@Component({
  selector: 'app-audit-details',
  templateUrl: './audit-details.component.html',
  styleUrls: ['./audit-details.component.css']
})
export class AuditDetailsComponent implements OnInit, AfterViewInit {
  details: any[]=[];
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

  // @ViewChild('changeTable', { read: MatSort, static: true }) changeTableSort: MatSort;

  // @ViewChild('changeTablePaginator') changeTablePaginator: MatPaginator;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private auditsService: AuditService) { }

  ngOnInit(): void {
    this.data.groupIds.forEach(groupId => {
      this.auditsService.getAuditDetails(groupId).subscribe((details) => {
        this.details.push(details);
        const tableSource = new MatTableDataSource<Change>(details?.Changes);
        // tableSource.paginator = this.changeTablePaginator[];
        // tableSource.sort = this.changeTableSort;
        this.changeDataSources.push(tableSource);
      });
    });
  }

  getChangeColumnKeys() {
    return this.changeColumns.map(c => c.key);
  }

  ngAfterViewInit() {
  }
}
