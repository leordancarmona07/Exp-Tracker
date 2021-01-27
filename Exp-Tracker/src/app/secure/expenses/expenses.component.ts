import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Expenses } from '../../models'; //Person Interface

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  
  expensesForm : FormGroup;

  constructor(private fb : FormBuilder,
    private http : HttpClient
    ) { }

  ngOnInit(): void {
    this.expensesForm = this.fb.group({
      category : ['', Validators.required],
      amount : ['', Validators.required],
      date : ['', Validators.required]

    });
  }

  test:Expenses[] = [{category: 'word1', amount: 10, date: '1/22/21'}, {category: 'word2', amount: 10, date: '1/22/21'}, {category: 'word3', amount: 10, date: '1/22/21'}, {category: '', amount: 10, date: '1/22/21'}];

  add() {
    this.test.push(this.expensesForm.value);
    console.log(this.test,"okay")
    
  }
}
