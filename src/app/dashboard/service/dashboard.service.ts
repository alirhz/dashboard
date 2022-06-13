import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/Core/base.service';
@Injectable()
export class DashboardService extends BaseService {

  constructor(http: HttpClient, private router: Router) {
    super(http);
  }

  public getUserData(userId: number) {
    return this.getRequest('user/' + userId);
  }
}
