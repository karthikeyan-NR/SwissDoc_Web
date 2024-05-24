import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CustomDialogService } from '../../helper/custom-dialog.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  @Input('menuConfig') config: any;
  screenWidth!: number;

  constructor(private customDialogService: CustomDialogService) { }

  ngOnInit(): void {
    this.updateScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(): void {
    this.updateScreenWidth();
  }

  private updateScreenWidth(): void {
    this.screenWidth = window.innerWidth;
  }

  private getDialogWidth(): string {
    if (this.screenWidth < 768) {
      return '90%';
    } else if (this.screenWidth < 1024) {
      return '70%';
    } else {
      return '50%';
    }
  }

  openDialog(formName: string): void {
    this.customDialogService.show(formName, this.getDialogWidth());
  }

}
