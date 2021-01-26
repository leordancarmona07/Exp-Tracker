<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    protected $fillable = [
        'expense_type',
        'expense_amount',
        'expense_date',
        'note',
        'user_id'
    ];

    public function isOwned() {
        return $this->belongsTo('App\Models\User');
    }

}
