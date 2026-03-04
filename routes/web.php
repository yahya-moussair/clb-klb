<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home/index');
})->name('home');

Route::get('/a-propos', function () {
    return Inertia::render('about/index');
})->name('about');

require __DIR__ . '/settings.php';
require __DIR__ . '/contact.php';
