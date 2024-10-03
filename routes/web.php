<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\RoleMiddleware;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard/Admin', function () {
    return Inertia::render('AdminDashBoard');
})->middleware(['auth', 'verified', 'role:admin'])->name('admindash');

Route::get('/dashboard/Reception', function () {
    return Inertia::render('RecepDashBoard');
})->middleware(['auth', 'verified', 'role:recap'])->name('rdashboard');

Route::get('/dashboard/Technician', function () {
    return Inertia::render('TechDashBoard');
})->middleware(['auth', 'verified', 'role:tech'])->name('tdashboard');

Route::get('/dashboard/Customer', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'role:user'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
