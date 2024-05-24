import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.css']
})
export class MenuGroupComponent {
  @Input() menuConfigs:any;
}
