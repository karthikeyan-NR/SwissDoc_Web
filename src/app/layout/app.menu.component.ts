import { OnInit } from '@angular/core';
import { Component } from '@angular/core';


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
                label: 'MENU.USER_PROFILES',  // USER PROFILES
                icon: 'pi pi-fw pi-users',
                items: [
                    { label: 'MENU.CHILDMENU_1', routerLink: [] },
                    { label: 'MENU.CHILDMENU_2', routerLink: [] }
                ]
            }
        ];
    }
}
