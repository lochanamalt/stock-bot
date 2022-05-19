import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../../auth_config.json';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ping$(): Observable<any> {
    console.log(config.apiUri);
    return this.http.get(`${config.apiUri}/api/external`);
  }

  subscribeCompanies(companyList) {
    return this.http.put(`${config.apiUri}/api/subscribe`, companyList);

    // return this.http.put(`${config.apiUri}/api/external`,
    //   companyList)
    //   .pipe(map((response: any) => {
    //     return response;
    //   }))
    //   .pipe(catchError( this.handleError));
  }



}
