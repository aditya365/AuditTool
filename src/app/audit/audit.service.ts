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
  paramString:any;
  getAuditData(account, region, vpc, application, audit,startDate,endDate): Observable<Audit[]> {
    if(startDate =="" && endDate =="" ){
          this.paramString = `account=${account}&region=${region}&vpc=${vpc}&application=${application}&audit=${audit}`;
    }
   this.paramString = `account=${account}&region=${region}&vpc=${vpc}&application=${application}&audit=${audit}&startDate=${startDate}&endDate=${endDate}`
 
    console.log(this.paramString)
   // return this.http.get<Audit[]>(`${environment.apiendpoint}audit/audit.json?account=${account}&region=${region}&vpc=${vpc}&application=${application}&audit=${audit}&startDate=${startDate}&endDate=${endDate}`);
    return this.http.get<Audit[]>(`${environment.apiendpoint}audit/audit.json?`+this.paramString);
  }

  getAuditDetails(groupId: string): Observable<any> {
    return this.http.get<any>(`${environment.apiendpoint}audit/details.json?groupid=${groupId}`);
  }

  getFilters(account:string): Observable<any> {
    return this.http.get(`${environment.apiendpoint}audit/filters.json?account=${account}`);
  }

  getAccounts(): Observable<any> {
    return this.http.get(`${environment.apiendpoint}audit/account.json`);
  }
}
