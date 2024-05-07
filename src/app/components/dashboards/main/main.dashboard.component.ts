import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import * as _ from 'lodash';
import { MenuItem } from 'primeng/api';
import { Observable, Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

interface MonthlyPayment {
    name?: string;
    amount?: number;
    paid?: boolean;
    date?: string;
}

@Component({
    templateUrl: './main.dashboard.component.html',
})
export class MainDashboardComponent implements OnInit, OnDestroy {

    constructor(
        private layoutService: LayoutService
    ) {

    }

    ngOnInit() {

    }

    ngOnDestroy(): void {
    }
}
