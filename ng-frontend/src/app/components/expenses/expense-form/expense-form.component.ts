import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IExpense } from '../../../models/expense-model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent implements OnChanges, OnInit {
  @Input() expense!: IExpense;
  title = 'Add New Expense';

  @Output() onCloseEvent = new EventEmitter();
  @Output() onAddExpenseEvent = new EventEmitter<IExpense>();
  @Output() onEditExpenseEvent = new EventEmitter<IExpense>();

  expenseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      title: new FormControl(),
      amount: new FormControl(),
      createdAt: new FormControl(),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.expense) {
      this.title = 'Edit Your Expense';
    }
  }

  ngOnInit(): void {
    if (this.expense) {
      this.expenseForm.patchValue(this.expense);
    }
  }

  onSubmitForm() {
    if (this.expense) {
      this.onEditExpenseEvent.emit({
        ...this.expenseForm.value,
        id: this.expense.id,
      });
      return;
    }
    this.onAddExpenseEvent.emit(this.expenseForm.value);
  }

  onClose() {
    this.onCloseEvent.emit();
  }
}
