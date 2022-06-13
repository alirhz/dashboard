import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/Core/base.service';
@Injectable()
export class AuthService extends BaseService {

  constructor(http: HttpClient, private router: Router) {
    super(http);
  }

  public LoginUser(userModel: object) {
    return this.postRequest('auth/login/', userModel).subscribe(
      (res) => {
        if (res) {
          localStorage.setItem("token",res.token);          
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
