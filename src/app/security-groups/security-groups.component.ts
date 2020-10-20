import { Component, ViewChild, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { securityGroup } from './models/securityGroup.model';
import { MatDialog } from '@angular/material/dialog';
import { SecurityGroupDetailsComponent } from './security-group-details/security-group-details.component';
import { SecurityGroupsService } from './security-groups.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-security-groups',
  styleUrls: ['./security-groups.component.css'],
  templateUrl: './security-groups.component.html'
})
export class SecurityGroupsComponent implements OnInit {
  filtersForm: FormGroup;
  filters: any;
  accounts: any;
  displayedColumns = [
    {
      key: 'groupName',
      displayName: 'Group Name'
    },
    {
      key: 'groupId',
      displayName: 'Group Id'
    },
    {
      key: 'vpc',
      displayName: 'VPC'
    },
    {
      key: 'AGS',
      displayName: 'Application'
    }
  ];
  dataSource: MatTableDataSource<securityGroup>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') filter : ElementRef;


  constructor(public dialog: MatDialog,
    private securityGroupsService: SecurityGroupsService) { }

  ngOnInit() {
    this.filtersForm = new FormGroup({
      account: new FormControl(''),
      region: new FormControl(''),
      vpc: new FormControl(''),
      application: new FormControl(''),
      securityGroup: new FormControl(''),
    });
    // this.securityGroupsService.getFilters().subscribe((filters) => {
    //   this.filters = filters;
    // });

    this.securityGroupsService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
      console.log("hi");
      console.log(this.accounts);
    });
  }

  getDisplayColumns() {
    return this.displayedColumns.map(c => c.key);
  }

  renderSecurityGroups() {
    const filters = this.filtersForm.value;
    if (filters.account != '' && filters.region != '' && filters.vpc != '' && filters.application != '') {
      this.securityGroupsService.getSecurityGroupsData(filters.account, filters.region, filters.vpc, filters.application, filters.securityGroup).subscribe((data) => {
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
  filterByAccount(account){
    this.dataSource= new MatTableDataSource();
    this.dataSource =null;
    console.log(account);
    this.securityGroupsService.getFilters(account).subscribe((filters) => {
      this.filters = filters;
    });
    this.filtersForm.patchValue({
      region :'',
      vpc:'',
      application:''
    });
    this.filter.nativeElement.value=''; 
  }
  showDetails(element) {
    const dialogRef = this.dialog.open(SecurityGroupDetailsComponent, {
      data: {
        groupId: element.groupId
      }
    });
  }

}
