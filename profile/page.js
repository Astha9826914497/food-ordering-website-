'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import './page.css';
import InfoBox from '@/components/InfoBox';
import SuccessBox from '@/components/SuccessBox';
import toast from 'react-hot-toast';
import Link from 'next/link';
import UserTabs from '@/components/UserTabs';
import EditableImage from '../../components/EditableImage';
import UserForm from '@/components/UserForm';



const profile = () => {
 
    const session = useSession();
    const [user,setUser] = useState(null);
    const [isAdmin,setIsAdmin] = useState(false);
    const [profileFetched, setProfileFetched] = useState(false);
    const {status} = session;

    useEffect(()=>{
        if (status === 'authenticated'){
            
            fetch('/api/profile').then(response=>{response.json().then(data=>{
                setUser(data);
                setIsAdmin(data.admin);
                setProfileFetched(true);
            })})
        }
    },[session, status]);

    async function handleProfileInfoUpdate(ev,data){
        ev.preventDefault();
        const savingPromise = new Promise(async(resolve,reject)=>{
            const response  = await fetch('/api/profile',{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(data),
            });
            if (response.ok) resolve()
            else reject();
        });

        await toast.promise(savingPromise,{
            loading: 'Saving...',
            success: 'Profile Saved!',
            error: 'Error',
        })
        
    }
    if (status === 'loading' || !profileFetched) {
        return 'Loading...';
    }

    if (status === 'unauthenticated') {
       return redirect('/login');
    }
    
  return (
    <section className='mt-40'>
        
        <UserTabs isAdmin={isAdmin}/>
        
        <div className='max-w-2xl mx-auto mt-4 '>
           <UserForm user={user} onSave={handleProfileInfoUpdate}/>
        </div>
    </section>
  );
}

export default profile;
