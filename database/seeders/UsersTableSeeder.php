<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; // Make sure to import the User model
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => Hash::make('password123'), // Hash the password
                'role' => 'admin',
            ],
            [
                'name' => 'Recap User',
                'email' => 'recap@example.com',
                'password' => Hash::make('password123'),
                'role' => 'recap',
            ],
            [
                'name' => 'Tech User',
                'email' => 'tech@example.com',
                'password' => Hash::make('password123'),
                'role' => 'tech',
            ],
            [
                'name' => 'Regular User',
                'email' => 'user@example.com',
                'password' => Hash::make('password123'),
                'role' => 'user',
            ],
        ];

        foreach ($users as $user) {
            User::create($user); // Insert each user into the database
        }
    }
}
