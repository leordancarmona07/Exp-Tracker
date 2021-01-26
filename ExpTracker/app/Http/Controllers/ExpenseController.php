<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expense;
use Error;

class ExpenseController extends Controller
{
    public function addExpense(Request $request){
        // print_r($request);
        // dd("here", $request);
        $validate = $request->validate([
            "expense_type" => "required",
            "expense_amount" => "required|min:0",
            "expense_date" => "required",
            "note" => "required",
        ]);

        if($validate) {
            $expense = new Expense;
            $expense->expense_type = $request->expense_type;
            $expense->expense_amount = $request->expense_amount;
            // dd("here", $request->expense_date);
            $expense->expense_date =$request->expense_date;
            $expense->note = $request->note;
            // dd("here");
            $expense->user_id = $request->user_id;
            // dd("here");
            
            $expense->save();
            return response(["message"=> "Expense added succesfully."],200);
        } else {
            return response(["message"=> "Cannot add expense to database.", "data"=> $request],400);
        }
         
    }
}
