<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Empowered Blockchain firm API' => '1.0.0'];
});


Route::post('/register',[RegisteredUserController::class,'store']);
Route::post('/login',[AuthenticatedSessionController::class,'store']);
require __DIR__.'/auth.php';
    