'use client';
import UserTabs from '@/components/UserTabs';

import { userProfile } from "@/components/UseProfile";
import Link from 'next/link';
import './page.css'
import { useEffect, useState } from 'react';
import Image from 'next/image';



export default function MenuItemsPage() {
    const { loading, data } = userProfile();
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => {
                setMenuItems(menuItems);

            })
        })
    }, [])


    if (loading) {
        return <div className="mt-40 text-center ">loading user info...</div>
    }
    if (!data.admin) {
        return <div className="mt-40 text-center ">Not an admin</div>
    }

    return (
        <section className='max-w-lg mx-auto mt-40'>
            <UserTabs isAdmin={true} />
            <div className='mt-8'>
                <Link className='gap-4 button' href={'/menu-items/new'}><div>+</div><div>Create New Menu-Item</div>  </Link>
            </div>
            <div>
                <h2 className='mt-8 text-sm text-gray-500'>Edit Menu Item : </h2>
                <div className='grid grid-cols-3 gap-4'>

                {menuItems?.length > 0 && menuItems.map(item => (
                    <Link href={'/menu-items/edit/' + item._id} className='p-4 bg-gray-200 rounded-lg '>
                        <div className='relative'>
                            <div className='rounded-md w-14 h-14 '>
                            <Image src={item.image} alt={''} layout={'fill'}/>
                            </div>
                        </div>
                        <div className='text-center'>
                        {item.name}
                        </div>
                    
                    </Link>

                ))}
                </div>
        

            </div>
        </section>
    )
}