import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CustomDialogService } from '../../helper/custom-dialog.service';
import { DialogService } from 'primeng/dynamicdialog';
import { PersonalDetailsComponent } from '../../personal-details/personal-details.component';
import { MedicalHistoryComponent } from '../../medical-history/medical-history.component';
import { LifeStyleComponent } from '../../life-style/life-style.component';
import { MedicationsComponent } from '../../medications/medications.component';

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.css']
})
export class MenuGroupComponent {
  @Input() menuConfigs: any;
  @Output() loading = new EventEmitter<boolean>();
  screenWidth!: number;
  dialogTransition: string = '1000ms cubic-bezier(0.25, 0.8, 0.25, 1)';

  private formConfigs: { [key: string]: { component: any; header: string, subHeading?: string } } = {
    'personal': { component: PersonalDetailsComponent, header: 'Personal Details' },
    'medical': { component: MedicalHistoryComponent, header: 'Medical History', subHeading: 'Check the conditions that apply to you or any member of your immediate relatives?' },
    'lifestyle': { component: LifeStyleComponent, header: 'Life Style' },
    'medication': { component: MedicationsComponent, header: 'Medications', subHeading: 'Do you take medications for any of the following medical conditions?' }
  };


  constructor(private dialogService: DialogService) { }

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
    this.show(formName, this.getDialogWidth());
  }

  getComponentConfig(formName: string) {
    return this.formConfigs[formName];
  }

  show(formName: string, width: string): void {
    this.loading.emit(true);
    const componentConfig = this.getComponentConfig(formName);
    if (componentConfig) {
      this.dialogService.open(componentConfig.component, {
        header: componentConfig.header,
        width: width,
        transitionOptions: this.dialogTransition,
        data: componentConfig.subHeading
      }).onClose.subscribe((data) => {
        this.loading.emit(false);
      });
    }
  }

}
