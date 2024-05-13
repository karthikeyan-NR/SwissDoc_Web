import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { getComponentConfig } from './config/form.config';
import { buttonConfigs } from './config/button.config';
import { tooltipOptions } from './config/tooltip.config';
import { TooltipOptions } from 'primeng/api/tooltipoptions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DialogService]
})
export class MainComponent {

  tooltipOptions: TooltipOptions = tooltipOptions;

  buttonConfigs = buttonConfigs;

  constructor(public dialogService: DialogService) { }

  show(formName: string) {
    const componentConfig = getComponentConfig(formName);
    this.dialogService.open(componentConfig.component, {
      header: componentConfig.header,
      width: '60%',
      transitionOptions: '1000ms cubic-bezier(0.25, 0.8, 0.25, 1)'
    })
  }
}
