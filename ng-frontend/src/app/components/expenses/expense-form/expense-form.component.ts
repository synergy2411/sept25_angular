import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IExpense } from '../../../models/expense-model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  @Output() onCloseEvent = new EventEmitter();
  @Output() onAddExpenseEvent = new EventEmitter<IExpense>();

  expenseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      title: new FormControl(),
      amount: new FormControl(),
      createdAt: new FormControl(),
    });
  }

  onSubmitForm() {
    this.onAddExpenseEvent.emit(this.expenseForm.value);
  }

  onClose() {
    this.onCloseEvent.emit();
  }
}
