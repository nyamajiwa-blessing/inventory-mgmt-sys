import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Manage Products',
        href: '/products',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                {/* Add product button */}
                <div className="ml-auto">
                    <Link className='bg-green-500 px-4 py-2 text-white rounded-lg text-md cursor-pointer hover:bg-green-700' as={'button'} href={route('products.create')}>Add Product</Link>
                </div>
                <div className='overflow-hidden rounded-lg border bg-white shadow-sm'>
                    <table className='w-full table-auto'>
                    <thead>
                        <tr className='bg-black text-white'>
                            <th className='p-4 border'>#</th>
                            <th className='p-4 border'>Name</th>
                            <th className='p-4 border'>Description</th>
                            <th className='p-4 border'>Price</th>
                            <th className='p-4 border'>Featured Image</th>
                            <th className='p-4 border'>Created At</th>
                            <th className='p-4 border'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-4 py-2 border text-center'>1</td>
                            <td className='px-4 py-2 border text-center'>Sample Product</td>
                            <td className='px-4 py-2 border text-center'>This is a sample product description.</td>
                            <td className='px-4 py-2 border text-center'>$19.99</td>
                            <td className='px-4 py-2 border text-center'>image.jpg</td>
                            <td className='px-4 py-2 border text-center'>2023-06-01</td>
                            <td className='px-4 py-2 border text-center'>Edit | Delete</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </AppLayout>
    );
}
