import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private options: any;

  constructor(
    private http: HttpClient,
  ) { }

  public headersAuthorization = (): HttpHeaders => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    };

    return new HttpHeaders(headers);
  };

  public createBranch(model: any): Observable<any> {
    this.options = { headers: this.headersAuthorization() };
    const url = `https://localhost:7127/api/Branch`;
    return this.http.post<any>(url, JSON.stringify(model), this.options).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.message);
      })
    );
  }

  public updateBranch(model: any): Observable<any> {
    this.options = { headers: this.headersAuthorization() };
    const url = `https://localhost:7127/api/Branch`;
    return this.http.put<any>(url, JSON.stringify(model), this.options).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.message);
      })
    );
  }

  public getBranch(): Observable<any> {
    this.options = { headers: this.headersAuthorization() };
    const url = `https://localhost:7127/api/Branch`;
    return this.http.get<any>(url, this.options).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.message);
      })
    );
  }

  public getCurrency(): Observable<any> {
    this.options = { headers: this.headersAuthorization() };
    const url = `https://localhost:7127/api/Branch/GetCurrency`;
    return this.http.get<any>(url, this.options).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.message);
      })
    );
  }

  public getBranchById(model: any): Observable<any> {
    this.options = { headers: this.headersAuthorization(), params: model };
    const url = `https://localhost:7127/api/Branch/GetBranchById`;
    return this.http.get<any>(url, this.options).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.message); 
      })
    );
  }

  public deleteBranch(model: any): Observable<any> {
    this.options = { headers: this.headersAuthorization(), params: model };
    const url = `https://localhost:7127/api/Branch`;
    return this.http.delete<any>(url, this.options).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err.message);
      })
    );
  }
}
