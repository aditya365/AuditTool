import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { securityGroup } from './models/securityGroup.model';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class SecurityGroupsService {

  constructor(private http: HttpClient) { }

  getSecurityGroupsData(account, region, vpc, application, securityGroup): Observable<securityGroup[]> {
    return this.http.get<securityGroup[]>(`./data/securityGroups.json?account=${account}&region=${region}&vpc=${vpc}&application=${application}&securityGroup=${securityGroup}`);
  }

  getSecurityGroupDetails(groupId: string): Observable<any> {
    return this.http.get<any>(`./data/details.json?groupid=${groupId}`);
  }

  getFilters(): Observable<any> {
    return this.http.get('./data/filters.json');
  }
}
