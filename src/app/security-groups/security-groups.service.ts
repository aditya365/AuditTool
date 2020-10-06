import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { securityGroup } from "./models/securityGroup.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class SecurityGroupsService {
  selectedSecurityGroupId = "";

  constructor(private http: HttpClient) {}

  getSecurityGroupsData(
    account,
    region,
    vpc,
    application,
    securityGroup
  ): Observable<securityGroup[]> {
    return this.http.get<securityGroup[]>(
      `${environment.apiendpoint}securityGroups.json?account=${account}&region=${region}&vpc=${vpc}&application=${application}&securityGroup=${securityGroup}`
    );
  }

  getSecurityGroupDetails(groupId: string): Observable<any> {
    return this.http.get<any>(
      `${environment.apiendpoint}details.json?groupid=${groupId}`
    );
  }

  getFilters(): Observable<any> {
    return this.http.get(`${environment.apiendpoint}filters.json`);
  }

  setSelectedSecurityGroupId(groupId) {
    console.log("setted");
    this.selectedSecurityGroupId = groupId;
  }

  getSelectedSecurityGroupId() {
    return this.selectedSecurityGroupId;
  }
}
