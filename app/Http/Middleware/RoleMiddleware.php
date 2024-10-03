<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        // Check if the user is authenticated
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Get the user's role
        $userRole = Auth::user()->role;

        // Check if the user has the appropriate role for the route
        if (!in_array($userRole, $roles)) {
            // Redirect based on user role
            if ($userRole === 'admin') {
                return redirect()->route('admindash')->with('message', 'Welcome to Admin Dashboard');
            }
            return redirect()->route('Dashboard')->with('message', 'Access Denied');
        }

        return $next($request);
    }
}
