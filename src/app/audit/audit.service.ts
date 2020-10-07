import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Audit } from './models/audit.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  constructor(private http: HttpClient) { }

  getAuditData(account, region, vpc, application, audit,startDate,endDate): Observable<Audit[]> {
    console.log(startDate,endDate);
    return this.http.get<Audit[]>(`${environment.apiendpoint}audit/audit.json?account=${account}&region=${region}&vpc=${vpc}&application=${application}&audit=${audit}&startDate=${startDate}&endDate=${endDate}`);
  }

  getAuditDetails(groupId: string): Observable<any> {
    return this.http.get<any>(`${environment.apiendpoint}audit/details.json?groupid=${groupId}`);
  }

  getFilters(): Observable<any> {
    return this.http.get(`${environment.apiendpoint}audit/filters.json`);
  }
}
