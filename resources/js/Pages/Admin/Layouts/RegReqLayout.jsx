import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RegBtn from '@/Pages/Admin/Components/RegCusBtn';

export default function AdminReg({ name, children }) {
    return (
        <AuthenticatedLayout>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="pb-5 sidebar">
                            <div className="mt-5">
                                <RegBtn className='my-1' href={route('admin.User.Reg')}>
                                    <div className="text-decoration-none text-start">
                                        <h4 className='p-0 m-0'>User Details</h4>
                                        <p className='p-0 m-0'>Basic user deatils register here.</p>
                                    </div>
                                </RegBtn>
                                <RegBtn className='my-1' href={route('admin.Address.Reg')}>
                                    <div className="text-decoration-none text-start">
                                        <h4 className='p-0 m-0'>Address Details</h4>
                                        <p className='p-0 m-0'>Register contact details.</p>
                                    </div>
                                </RegBtn>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="container">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

