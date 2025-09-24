import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { IExpense } from '../../../models/expense-model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  expenseCollection!: Array<IExpense>;
  showForm = false;

  showEditableForm = false;
  editableExpense!: IExpense;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService
      .getAllExpenses()
      .subscribe((allExpenses) => (this.expenseCollection = allExpenses));
  }

  onAddNewExpense(expense: IExpense) {
    this.expenseService.createExpense(expense).subscribe((newExpense) => {
      this.expenseCollection.push(newExpense);
      this.showForm = !this.showForm;
    });
  }

  onDeleteExpense(expenseId: string) {
    this.expenseService.deleteExpense(expenseId).subscribe(() => {
      const position = this.expenseCollection.findIndex(
        (exp) => exp.id === expenseId
      );
      this.expenseCollection.splice(position, 1);
    });
  }

  onEditExpense(expense: IExpense) {
    this.editableExpense = expense;
    this.showEditableForm = !this.showEditableForm;
  }

  onEditExpenseEvent(expense: IExpense) {
    this.expenseService.updateExpense(expense).subscribe((editedExpense) => {
      const position = this.expenseCollection.findIndex(
        (exp) => exp.id === editedExpense.id
      );
      this.expenseCollection[position] = editedExpense;
      this.showEditableForm = !this.showEditableForm;
    });
  }
}
