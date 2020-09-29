import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { securityGroup } from './models/securityGroup.model';
import { SecurityGroupsResponse } from './models/securityGroupsResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityGroupsService {

  constructor(private http: HttpClient) { }

  getSecurityGroupsData(sortBy: string, direction:string, pageIndex:number): Observable<SecurityGroupsResponse> {
    return this.http.get<SecurityGroupsResponse>('./data/securityGroups.json');
  }
}
