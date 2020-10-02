import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Audit } from './models/audit.model';
import { MatDialog } from '@angular/material/dialog';
import { AuditDetailsComponent } from './audit-details/audit-details.component';
import { AuditService } from './audit.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-audit',
  styleUrls: ['./audit.component.css'],
  templateUrl: './audit.component.html'
})
export class AuditComponent implements OnInit {
  filtersForm: FormGroup;
  filters: any;
  displayedColumns = [
    {
      key: 'groupId',
      displayName: 'Group Id'
    },
    {
      key: 'account',
      displayName: 'Account'
    },
    {
      key: 'direction',
      displayName: 'Direction'
    },
    {
      key: 'resourceType',
      displayName: 'Resource Type'
    },
    {
      key: 'updatedDate',
      displayName: 'Last Edited Time'
    },
    {
      key: 'lastEditedBy',
      displayName: 'Last Edited By'
    }
  ];
  dataSource: MatTableDataSource<Audit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
    private auditService: AuditService) { }

  ngOnInit() {
    this.filtersForm = new FormGroup({
      account: new FormControl(''),
      region: new FormControl(''),
      vpc: new FormControl(''),
      application: new FormControl(''),
      audit: new FormControl(''),
    });
    this.auditService.getFilters().subscribe((filters) => {
      this.filters = filters;
    });
  }

  getDisplayColumns() {
    return this.displayedColumns.map(c => c.key);
  }

  renderAudits() {
    const filters = this.filtersForm.value;
    if (filters.account != '' && filters.region != '' && filters.vpc != '' && filters.application != '') {
      this.auditService.getAuditData(filters.account, filters.region, filters.vpc, filters.application, filters.audit).subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource)
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showDetails(element) {
    const dialogRef = this.dialog.open(AuditDetailsComponent, {
      data: {
        groupId: element.groupId
      },
      width: "80%"
    });
  }

}
