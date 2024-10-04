import AdminReg from '@/Pages/Admin/Layouts/RegReqLayout';
import { Head } from '@inertiajs/react';

export default function AddressRegAdmin() {
    return (
        <AdminReg>
            <Head title="Add User Address" />

            <div className='pt-5 mb-5'>
                <h1 className='p-0 m-0'>Elevate Your Brand with Custom Company Receptions</h1>
                <p className='p-0 m-0'>
                    Enhance Your Client Experience by Adding Your Company Receptions.
                    Streamline communication and engagement with personalized reception areas tailored to your business needs.
                </p>
            </div>
        </AdminReg>
    );
}
