<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// this gets all users
Route::get('/', [UserController::class, 'index']);
// this return requested user
Route::get('/user',[ UserController::class, 'user'])->middleware('auth:api');
// This add user
Route::post('/register',[ UserController::class, 'register']);
// This gets specific user's detail
Route::get('/user/{id}',[ UserController::class, 'getUserById']);
// This for updating user
Route::put('/updateUser/{id}',[ UserController::class, 'updateUser']);
//This for deleting user
Route::delete('/deleteUser/{id}',[ UserController::class, 'deleteUser']);




