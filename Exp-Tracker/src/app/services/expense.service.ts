import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  EXPENSE_URL: string = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  public addExpense(data: any) {

    console.log(data);
    
    let formData: any = new FormData();
    formData.append('expense_type',data.expense_type)
    formData.append('expense_amount',data.expense_amount)
    formData.append('expense_date',data.expense_date)
    formData.append('note',data.note)
    formData.append('user_id',data.user_id)
    
    return this.http.post(`${this.EXPENSE_URL}addExpense`, formData)
  }
}
