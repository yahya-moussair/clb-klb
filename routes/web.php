<?php

use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\LocaleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::post('/locale', [LocaleController::class, 'store'])->name('locale.store');

Route::get('/', HomeController::class)->name('home');

Route::get('/a-propos', function () {
    return Inertia::render('user/about/index');
})->name('about');

Route::group(['middleware' => 'auth', 'role:admin', 'verified'], function () {
    Route::get('/admin/dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});




require __DIR__ . '/user/blogs.php';
require __DIR__ . '/blog.php';
require __DIR__ . '/contact.php';
require __DIR__ . '/settings.php';
