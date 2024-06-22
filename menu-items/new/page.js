'use client';
import EditableImage from "@/components/EditableImage";
import { userProfile } from "@/components/UseProfile";
import UserTabs from "@/components/UserTabs";
import Link from "next/link";
import { useState } from "react";
import './page.css'
import { redirect } from "next/dist/server/api-utils";
import toast from "react-hot-toast";
import MenuItemForm from "@/components/MenuItemForm";

export default function NewMenuItemPage(){
    const {loading,data} = userProfile();
    const [redirectToItems,setRedirectToItems] = useState(false);

    async function handleFormSubmit(ev,data) {
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve,reject)=>{
            const response  = await fetch('/api/menu-items',{
                method:'POST',
                body: JSON.stringify(data),
                headers:{'Content-Type':'application/json'},
            });

            if (response.ok) 
                resolve();
            else 
            reject();
        });

        await toast.promise(savingPromise,{

            loading:'Saving',
            success: 'Saved',
            error: 'Something went wrong'
        })
       setRedirectToItems(true);

       
         
    }
    
    
    if (loading){
        return <div className="mt-40 text-center ">loading user info...</div>
    }
    if (!data.admin){
        return <div className="mt-40 text-center ">Not an admin</div>
    }

    return (
           <section className="max-w-2xl mx-auto mt-40">
            <UserTabs isAdmin={true}/>
            <div className="max-w-lg mx-auto mt-8"><Link className="button" href={'/menu-items'}>
                <div className="flex justify-center gap-4">
                <div>Show all Menu Items</div> 
                <div>&gt; &gt;</div> 
                </div>
              
                </Link></div>
           <MenuItemForm menuItem={null} onSubmit={handleFormSubmit}/>
        </section>
    )
}