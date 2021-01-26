import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SecureComponent } from '../secure.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  
  form : FormGroup;
  expense: any;
  userData: any;
  constructor(private expenseService: ExpenseService, private fb: FormBuilder, private secure: SecureComponent) {
    
  }
  async ngOnInit() {
    this.form = await this.fb.group({
      expense_type: "",
        expense_amount: "",
        expense_date: "",
        note: "",
        user_id: this.secure.user.id
    })

    this.userData = this.secure.user;
    
  }

  addExpense(formData:any) {
    console.log(formData);
    
    this.expenseService.addExpense(formData.value).subscribe(res=>{
      console.log(res);
    })
  }

}
