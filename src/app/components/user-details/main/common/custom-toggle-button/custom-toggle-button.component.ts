import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-toggle-button',
  templateUrl: './custom-toggle-button.component.html',
  styleUrl: './custom-toggle-button.component.scss'
})
export class CustomToggleButtonComponent {
  @Input() config!: any;
  @Output() openConditionDialog = new EventEmitter<boolean>();

  toggleCondition() {
    this.config.value = !this.config.value;
    if (this.config.value) {
      this.openConditionDialog.emit(true);
    }
  }
}
