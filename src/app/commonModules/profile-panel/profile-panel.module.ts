import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Menu, MenuModule } from 'primeng/menu';

import { ProfilePanelComponent } from './profile-panel/profile-panel.component';


@NgModule({
  declarations: [ProfilePanelComponent],
  imports: [
    CommonModule,
    PanelModule,
    AvatarModule,
    ButtonModule,
    MenuModule
  ],
  exports: [ProfilePanelComponent]
})
export class ProfilePanelModule { }
