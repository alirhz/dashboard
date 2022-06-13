import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { AuthService } from '../Auth/service/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router,
    private _snackBar: MatSnackBar) {}
  private error$ = new BehaviorSubject<any>(false);
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((res: any) => {
        const token: string = localStorage.getItem('token') || "";
        const authReq = request.clone({
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': token
          })
          
        });      
        return next.handle(authReq);
      }),
      catchError((error: HttpErrorResponse) => {
          if( error.status == 400) {
            this._snackBar.open('مشکلی در سرور رخ داده است', 'متوجه شدم');
          }
          if( error.status == 401) {
            this._snackBar.open('متاسفانه سرویس مورد نظر پیدا نشد', 'متوجه شدم');
          }
        return this.error$;
      })
    );
  }
}
