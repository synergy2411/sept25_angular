import { Component, Input } from '@angular/core';
import { IExpense } from '../../../models/expense-model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css',
})
export class ExpenseItemComponent {
  @Input() expense!: IExpense;
}
