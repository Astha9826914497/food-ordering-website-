'use client'

import { userProfile } from "@/components/UseProfile";
import UserTabs from "@/components/UserTabs";
import Link from "next/link";
import { useEffect, useState } from "react";
import './page.css';
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import MenuItemForm from "@/components/MenuItemForm";
import DeleteButton from "@/components/DeleteButton";
export default function EditMenuItemPage(){

    const {loading,data} = userProfile();
    const [menuItem,setMenuItem] = useState(null);
    const [redirectToItems,setRedirectToItems] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        fetch('/api/menu-items').then(res=>{
            res.json().then(items=>{
                const item = items.find(i=>i._id === id);
            setMenuItem(item);
            })
        })
    },[])

    async function handleFormSubmit(ev,data) {
        ev.preventDefault();
         data = {...data,_id:id};
        const savingPromise = new Promise(async (resolve,reject)=>{
            const response  = await fetch('/api/menu-items',{
                method:'PUT',
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
    

    async function handleDeleteClick(){
        const promise = new Promise( async (resolve,reject)=>{
            const response = await fetch('/api/menu-items?_id='+id,{
                method: 'DELETE',
               })

               if (response.ok) {
                resolve();
               }else {
                reject();
               }
        })

  
        await toast.promise(promise,{
            loading: 'Deleting',
            success: "Deleted",
            error: 'error'
        })
        
        setRedirectToItems(true);
    
    };

    
    if (loading){
        return <div className="mt-40 text-center ">loading user info...</div>
    }
    if (!data.admin){
        return <div className="mt-40 text-center ">Not an admin</div>
    }

    return (

        
           <section className="mt-40 ">
            <UserTabs isAdmin={true}/>
            <div className="max-w-2xl pl-4 mx-auto mt-8"><Link className="button" href={'/menu-items'}>
                <div className="flex justify-center gap-4 ">
                <div>Show all Menu Items</div> 
                <div>&gt; &gt;</div> 
                </div>
              
                </Link></div>
                <div className='max-w-md mx-auto mt-8'>
                    <MenuItemForm onSubmit={handleFormSubmit} menuItem={menuItem}/>
                    <div className="max-w-xl mt-2 mb-8 pl-36 grow">
                    <DeleteButton label={'Delete'} onDelete={handleDeleteClick}/>  
                    </div>   
                </div>
        </section>
    )
}
