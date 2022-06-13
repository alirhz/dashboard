import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  userForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private dashboardService: DashboardService
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', null],
      lastName: ['', null],
      gender: ['', null],
      birthDate: ['', null],
      nationalId: ['', null],
    });
  }

  ngOnInit(): void {
    this.getUserForm();
  }

  getUserForm() {
    this.dashboardService.getUserData(1).subscribe((res: any) => {
      console.log(res);
    });
  }
}
