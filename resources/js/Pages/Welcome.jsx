import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <nav
                class="navbar navbar-expand-sm navbar-light bg-light"
            >
                <div class="container-fluid px-5">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button
                        class="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="#" aria-current="page"
                                >Home
                                    <span class="visually-hidden">(current)</span></a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >Dropdown</a
                                >
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownId"
                                >
                                    <a class="dropdown-item" href="#"
                                    >Action 1</a
                                    >
                                    <a class="dropdown-item" href="#"
                                    >Action 2</a
                                    >
                                </div>
                            </li>
                        </ul>
                        <div class="d-flex my-2 my-lg-0">
                            <nav className="">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="btn btn-outline-dark py-2 px-4"
                                        >
                                            Log in
                                        </Link>
                                        {/* <Link
                                            href={route('register')}
                                            className="btn btn-dark ms-2 py-2 px-4"
                                        >
                                            Register
                                        </Link> */}
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <div className='container p-5'>
                    <div className="text-start">
                        <h1 className='p-0 m-0 px-5 text-recap-h1 text-Decoration-icon'>Arc</h1>
                        <h1 className='px-5'>Welcome to Arc Service Center!</h1>
                        <p className='p-0 m-0 mt-1 px-5'>At Arc Service Center, we’re dedicated to providing top-notch service and support to meet all your needs. Our expert team is here to ensure your experience is seamless and satisfying. Whether you’re looking for repairs, maintenance, or expert advice, you can count on us to go above and beyond. Join our community of satisfied customers and discover the difference today!</p>
                        <div className='mt-3 px-5'>
                            <Link
                                href={route('login')}
                                className="btn btn-outline-primary py-2 px-4"
                            >
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
