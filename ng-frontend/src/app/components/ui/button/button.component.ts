import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Output() btnClickEvent = new EventEmitter();

  @Input() favColor!: string;

  onBtnClick() {
    this.btnClickEvent.emit();
  }
}
