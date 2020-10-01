import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Audit } from './models/audit.model';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http: HttpClient) { }

  getAuditData(account, region, vpc, application, audit): Observable<Audit[]> {
    return this.http.get<Audit[]>(`./data/audit/audit.json?account=${account}&region=${region}&vpc=${vpc}&application=${application}&audit=${audit}`);
  }

  getAuditDetails(groupId: string): Observable<any> {
    return this.http.get<any>(`./data/audit/details.json?groupid=${groupId}`);
  }

  getFilters(): Observable<any> {
    return this.http.get('./data/audit/filters.json');
  }
}
