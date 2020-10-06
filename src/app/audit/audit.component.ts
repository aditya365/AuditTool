import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Audit } from './models/audit.model';
import { MatDialog } from '@angular/material/dialog';
import { AuditDetailsComponent } from './audit-details/audit-details.component';
import { AuditService } from './audit.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';
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
  selection = new SelectionModel<Audit>(true, []);
  selectedRows = [];
  displayedColumns = [
    // {
    //   key: 'select',
    //   displayName: 'Select'
    // },
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


  isAllSelected() {
    if (this.dataSource) {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    console.log(this.selection);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Audit): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.groupId + 1}`;
  }

  getDisplayColumns() {
    //return ['select','account','direction'];
    let columns = [];
    columns.push('select');
    columns.push(...this.displayedColumns.map(c => c.key));
    return columns;
  }

  updatedSelectedList(event, row) {
    if (event.checked) {
      this.selectedRows.push(row.groupId);
    } else {
      const groupIdIndex = this.selectedRows.indexOf(row.groupId);
      this.selectedRows.splice(groupIdIndex, 1);
    }
    console.log(this.selectedRows);
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

  showDetails() {
    console.log("show details clicked");
    if (this.selectedRows.length > 0) {
      const dialogRef = this.dialog.open(AuditDetailsComponent, {
        data: {
          groupIds: this.selectedRows
        },
        width: "100%"
      });
    }
  }
}
