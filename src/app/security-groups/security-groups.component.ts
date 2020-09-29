import { Component, OnInit } from '@angular/core';
import { securityGroup } from './models/securityGroup.model';
import { SecurityGroupsService } from './security-groups.service';

@Component({
  selector: 'app-security-groups',
  templateUrl: './security-groups.component.html',
  styleUrls: ['./security-groups.component.css']
})
export class SecurityGroupsComponent implements OnInit {
  dataSource: securityGroup[] = [];
  displayedColumns: string[] = ['groupName', 'groupId', 'vpc', 'description', 'application'];
  constructor(private securityGroupsService: SecurityGroupsService) { }

  ngOnInit(): void {
    this.securityGroupsService.getSecurityGroupsData("", "", 1).subscribe((data) => { this.dataSource = data.items });
  }
}
