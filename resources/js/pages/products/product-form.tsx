import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CustomTextarea from '@/components/ui/custom-textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Product',
        href: route('products.create'),
    },
];

export default function ProductForm() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Products" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div className='ml-auto'>
                    <Link as={'button'} className='bg-green-500 px-4 py-2 text-white rounded-lg text-md cursor-pointer hover:bg-green-700 w-fit' href={route('products.index')}>Back to Products</Link>
                </div>
                <Card>
                    <CardHeader>  
                        <CardTitle>Add New Product</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="flex flex-col gap-4" autoComplete='off'>
                            <div className="grid gap-6">
                                {/* Product Name */}
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Product Name</Label>
                                    <Input id='name' name='name' type='text' placeholder='Enter product name...' autoFocus tabIndex={1} />
                                </div>
                                {/* Product description */}
                                <div className="grid gap-2">
                                    <Label htmlFor="description">Product Description</Label>
                                    <CustomTextarea id='description' name='description' tabIndex={2} placeholder='Enter product description...' rows={3} />
                                </div>
                                {/* Product price */}
                                <div className="grid gap-2">
                                    <Label htmlFor="price">Product Price</Label>
                                    <Input id='price' name='price' type='text' placeholder='Enter product price...' autoFocus tabIndex={3} />
                                </div>
                                {/* Product featured image */}
                                <div className="grid gap-2">
                                    <Label htmlFor="featured_image">Featured Image</Label>
                                    <Input id='featured_image' name='featured_image' type='file' autoFocus tabIndex={4} />
                                </div>
                                {/* Product submit */}
                                <Button type="submit" className="mt-4 w-fit cursor-pointer" tabIndex={5}>
                                    Add Product
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
