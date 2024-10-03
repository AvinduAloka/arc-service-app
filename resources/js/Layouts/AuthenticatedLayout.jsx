import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-vh-100 bg-white">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container-fluid px-5">
                    <Link href="/" className="navbar-brand">
                        <ApplicationLogo className="h-9 w-auto" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                        aria-controls="navbarNav"
                        aria-expanded={showingNavigationDropdown}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${showingNavigationDropdown ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0 d-flex align-items-end">
                            <li className='nav-item'>
                                <NavLink
                                    href={route('dashboard')}
                                    className="nav-link text-decoration-none"
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                {/* Conditional NavLink for Admin */}
                                {user.role === 'admin' && (
                                    <NavLink
                                        href={route('Admin.RegisterAdmin')}
                                        className={`nav-link text-decoration-none normal-nav-link mx-3 ${route().current('Admin.RegisterAdmin') ? 'active' : ''}`}
                                        active={route().current('Admin.RegisterAdmin')}
                                    >
                                        Add User
                                    </NavLink>
                                )}
                            </li>
                        </ul>


                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        className="btn btn-outline-dark dropdown-toggle "
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {user.name}
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">Log Out</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white">
                    <div className="container py-4">
                        {header}
                    </div>
                </header>
            )}

            <main className="container">
                {children}
            </main>
        </div>
    );
}
