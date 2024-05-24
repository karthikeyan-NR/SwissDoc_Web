import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/accordion';
import { OrderListModule } from 'primeng/orderlist';
import { MessagesModule } from 'primeng/messages';

import { MainDashboardComponent } from './main.dashboard.component';
import { MainDashboardRoutingModule } from './main.dashboard-routing.module';
import { ProfilePanelModule } from 'src/app/commonModules/profile-panel/profile-panel.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RecentDataViewComponent } from './recent-data-view/recent-data-view.component';
import { AccordionComponent } from '../common/accordion/accordion.component';
import { CustomChartModule } from 'src/app/commonModules/custom-chart/custom-chart.module';
import { TachogramComponent } from '../common/tachogram/tachogram.component';
import { PoincareComponent } from '../common/poincare/poincare.component';

@NgModule({
    imports: [
        CommonModule,
        ProfilePanelModule,
        ButtonModule,
        RippleModule,
        TagModule,
        TooltipModule,
        TableModule,
        InputNumberModule,
        CustomChartModule,
        MenuModule,
        AccordionModule,
        OrderListModule,
        MessagesModule,
        MainDashboardRoutingModule
    ],
    declarations: [
        MainDashboardComponent,
        UserProfileComponent,
        RecentDataViewComponent,
        AccordionComponent,
        TachogramComponent,
        PoincareComponent
    ]
})
export class MainDashboardModule { }
