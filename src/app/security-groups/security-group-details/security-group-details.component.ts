import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SecurityGroupsService } from "../security-groups.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { InboundRule } from "../models/inbound-rule.model";
import { OutboundRule } from "../models/outbound-rule.model";

@Component({
  selector: "app-security-group-details",
  templateUrl: "./security-group-details.component.html",
  styleUrls: ["./security-group-details.component.css"],
})
export class SecurityGroupDetailsComponent implements OnInit, AfterViewInit {
  details: any;
  inboundRulesColumns = [
    {
      key: "protocol",
      displayName: "Protocol",
    },
    {
      key: "port",
      displayName: "Port",
    },
    {
      key: "source",
      displayName: "Source",
    },
  ];
  outboundRulesColumns = [
    {
      key: "protocol",
      displayName: "Protocol",
    },
    {
      key: "port",
      displayName: "Port",
    },
    {
      key: "destination",
      displayName: "Destination",
    },
  ];
  tagsColumns = ["Key", "Value"];

  inboundRulesDataSource: MatTableDataSource<InboundRule>;
  outboundRulesDataSource: MatTableDataSource<OutboundRule>;

  @ViewChild("inboundTable", { read: MatSort, static: true })
  inboundTableSort: MatSort;
  @ViewChild("outboundTable", { read: MatSort, static: true })
  outboundTableSort: MatSort;

  @ViewChild("inboundTablePaginator") inboundTablePaginator: MatPaginator;
  @ViewChild("outboundTablePaginator") outboundTablePaginator: MatPaginator;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private securityGroupsService: SecurityGroupsService
  ) {}

  ngOnInit(): void {}

  getInboundColumnKeys() {
    return this.inboundRulesColumns.map((c) => c.key);
  }

  getOutboundColumnKeys() {
    return this.outboundRulesColumns.map((c) => c.key);
  }

  ngAfterViewInit() {
    this.securityGroupsService
      .getSecurityGroupDetails(this.data.groupId)
      .subscribe((details) => {
        this.details = details;
        this.inboundRulesDataSource = new MatTableDataSource(
          details?.inboundRules
        );
        this.inboundRulesDataSource.paginator = this.inboundTablePaginator;
        this.inboundRulesDataSource.sort = this.inboundTableSort;

        this.outboundRulesDataSource = new MatTableDataSource(
          details?.outboundRules
        );
        this.outboundRulesDataSource.paginator = this.outboundTablePaginator;
        this.outboundRulesDataSource.sort = this.outboundTableSort;
      });
  }
}
