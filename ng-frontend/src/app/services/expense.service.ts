import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExpense } from '../models/expense-model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseURL = 'http://localhost:3000/expenses';

  constructor(private http: HttpClient) {}

  getAllExpenses(): Observable<Array<IExpense>> {
    return this.http.get<Array<IExpense>>(this.baseURL);
  }

  getExpense(expenseId: string) {}

  createExpense(expense: IExpense) {}

  deleteExpense(expenseId: string) {}

  updateExpense(expense: IExpense) {}
}
