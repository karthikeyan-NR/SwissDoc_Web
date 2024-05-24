import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'MENU.DASHBOARD',
                icon: 'pi pi-fw pi-home',
                routerLink: ['/dashboard']
            },
            { separator: true },
            {
                label: 'User Profile',
                icon: 'pi pi-fw pi-users',
                routerLink: ['/profile']
            }
        ];
    }
}
