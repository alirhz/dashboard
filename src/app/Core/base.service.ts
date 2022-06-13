import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class BaseService {
  protected apiUrl: string;

  constructor(protected http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  // you can use these by subscribing to them

  protected getRequest(Url: string,_data?: any):Observable<any> {
    return this.http.get<any>(this.apiUrl + Url,_data);
  }

  protected postRequest(Url: string,_data?: any):Observable<any> {
    return this.http.post<any>(this.apiUrl + Url,_data);
  }

  protected putRequest(Url: string,_data?: any):Observable<any> {
    return this.http.put<any>(this.apiUrl + Url,_data);
  }

  protected patchRequest(Url: string,_data?: any):Observable<any> {
    return this.http.patch<any>(this.apiUrl + Url,_data);
  }

  protected deleteRequest(Url: string,_data?: any):Observable<any> {
    return this.http.delete<any>(this.apiUrl + Url,_data);
  }

}