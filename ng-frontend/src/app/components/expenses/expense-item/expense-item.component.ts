import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExpense } from '../../../models/expense-model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css',
})
export class ExpenseItemComponent {
  @Input() expense!: IExpense;
  @Output() onDeleteEvent = new EventEmitter<string>();
  @Output() onEditEvent = new EventEmitter<IExpense>();

  onDelete() {
    if (
      confirm(
        'Are you sure to delete this item - ' +
          this.expense.title.toUpperCase() +
          '?'
      )
    ) {
      return this.onDeleteEvent.emit(this.expense.id);
    }
    return;
  }

  onEdit() {
    this.onEditEvent.emit(this.expense);
  }
}
