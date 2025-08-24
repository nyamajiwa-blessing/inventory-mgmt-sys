<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    // This products route is added inside of middleware group and is only accessible to authenticated users
    Route::resource('products', App\Http\Controllers\ProductController::class); // Use fully qualified class name
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
