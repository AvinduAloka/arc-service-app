<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    //
    // Show the admin dashboard
    public function adminDashboard()
    {
        return inertia('Admin/AdminDashBoard'); // Adjust the view as necessary
    }

    public function showAddUserForm()
    {
        return redirect()->route('admin.User.Reg'); // Adjust the view as necessary
    }

    // Handle the add user form submission
    public function addUser(Request $request)
    {
        if (!Auth::check()) {
            return redirect()->route('login')->with('message', 'Please log in to add users.');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed', // Ensure password is confirmed
            'nic' => 'required|string|max:12',
            'role' => 'required|string|in:user,admin', // Allow both user and admin roles
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password), // Hash the password
            'nic' => $request->nic,
            'role' => $request->role,
        ]);

        return redirect()->route('admindash')->with('success', 'User added successfully!');
    }

    public function showAddressReg($id)
    {
        // Show the address registration form with user ID
        return inertia('Admin/AddressRegAdmin', ['id' => $id]);
    }
}
