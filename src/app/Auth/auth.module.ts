import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './service/auth.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [AuthService],
})
export class AuthModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/