import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { StackChartComponent } from './stack-chart/stack-chart.component';
import { LayoutModule } from '../layout/layout.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MaterialModule } from '../material.module';
import { DashboardService } from './service/dashboard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from '../Core/auth.interceptor';

@NgModule({
  declarations: [
    DashboardComponent,
    StackChartComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    dashboardRoutingModule,
    HighchartsChartModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [DashboardService,
    { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true }
  ]
})
export class DashboardModule { }
