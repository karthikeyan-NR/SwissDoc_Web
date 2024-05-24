import { Component, OnInit } from '@angular/core';
import { menuConfigs } from './helper/user-details.config';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  menuConfigs = menuConfigs;
  userDetails: {
    heading: string,
    data: any
  }[];
  stateOptions: any[] = [{ label: 'Enter Details', value: 'on' }, { label: 'View Details', value: 'off' }];
  loading: boolean = false;

  constructor(private userDataService: UserDataService) {
    this.userDetails = [];
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    this.userDetails = [
      { heading: 'Personal Details', data: this.userDataService.getPersonalDetail() },
      { heading: 'Medical History', data: this.userDataService.getMedicalHistory() },
      { heading: 'LifeStyle', data: this.userDataService.getLifeStyle() },
      { heading: 'Medications', data: this.userDataService.getMedications() }
    ];
  }

  isLoading(loading: boolean) {
    this.loading = loading;
    this.getUserDetails();
  }
}
