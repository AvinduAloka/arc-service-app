import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="background-layout">

            <div className="w-25 ">
                <div className="container-fluid p-0 m-0">
                    <div className='d-flex justify-content-start'>
                        <h1 className='p-0 m-0'>Log In</h1>
                        <h1 className='p-0 m-0 text-Decoration-icon ms-2'>Arc</h1>
                    </div>
                    <p className='form-text p-0 m-0 my-1 mb-3'>Welcome to Arc Service Center. where exceptional service meets your needs!</p>
                </div>
                {children}
            </div>
        </div>
    );
}
