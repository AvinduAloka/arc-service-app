import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AdminReg from '@/Pages/Admin/Layouts/RegReqLayout';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegisterAdmin() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        nic: '',
        role: 'user', // Default role
    });

    const submit = (e) => {
        e.preventDefault();

        // Adjust the route to match the controller method
        post(route('admin.storeUser'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AdminReg>

            <Head title="Add New User" />

            <div className='pt-5 mb-5'>
                <h1 className='p-0 m-0'>Elevate Your Brand with Custom Company Receptions</h1>
                <p className='p-0 m-0'>
                    Enhance Your Client Experience by Adding Your Company Receptions.
                    Streamline communication and engagement with personalized reception areas tailored to your business needs.
                </p>
            </div>

            <form onSubmit={submit} className='mb-5'>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="nic_number" value="NIC Number" />
                    <TextInput
                        id="nic"
                        type="nic"
                        name="nic"
                        value={data.password}
                        onChange={(e) => setData('nic', e.target.value)}
                        required
                    />
                    <InputError message={errors.nic} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="role" value="Role" />
                    <select
                        id="role"
                        name="role"
                        value={data.role}
                        onChange={(e) => setData('role', e.target.value)}
                        className="form-select py-3"
                        required
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <div className="my-4 d-flex justify-content-end">
                    <PrimaryButton className="w-25 py-2" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </AdminReg>
    );
}
