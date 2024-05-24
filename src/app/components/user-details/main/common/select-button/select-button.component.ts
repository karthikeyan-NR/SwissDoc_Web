import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent {
  @Input() label!: string;
  @Input() tooltipText!: string;
  @Input() options!: any[];
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  selectedOption: any;

  onValueChange() {
    this.valueChange.emit(this.selectedOption);
  }
}
