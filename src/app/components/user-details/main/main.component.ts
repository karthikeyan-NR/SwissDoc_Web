import { Component, HostListener, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { TooltipOptions } from 'primeng/api';
import { getComponentConfig } from './config/form.config';
import { buttonConfigs } from './config/button.config';
import { tooltipOptions } from './config/tooltip.config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tooltipOptions: TooltipOptions = tooltipOptions;

  buttonConfigs = buttonConfigs;
  screenWidth: any;

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenWidth = window.innerWidth;
  }

  show(formName: string) {
    let width = '50%';
    if (this.screenWidth < 768) {
      width = '90%';
    } else if (this.screenWidth >= 768 && this.screenWidth < 1024) {
      width = '70%';
    } else {
      width = '50%';
    }
    const componentConfig = getComponentConfig(formName);
    this.dialogService.open(componentConfig.component, {
      header: componentConfig.header,
      width: width,
      transitionOptions: '1000ms cubic-bezier(0.25, 0.8, 0.25, 1)'
    })
  }
}
