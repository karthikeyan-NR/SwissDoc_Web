import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() options!: any[];
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  selectedOption: any = null;
  onValueChange(selectedOption: any) {
    this.valueChange.emit(selectedOption);
  }
}
