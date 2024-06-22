
'use client';
import UserTabs from "@/components/UserTabs";
import './page.css';
import { useEffect, useState } from "react";
import { userProfile } from "@/components/UseProfile";
import toast from "react-hot-toast";
import axios from "axios";
import DeleteButton from "@/components/DeleteButton";

export default function Category() {

    const [categoryName, setCategoryName] = useState('')
    const { loading: profileLoading, data: profileData } = userProfile();
    const [categories, setCategories] = useState([])
    const [editedCategory, setEditedCategory] = useState(null)

    useEffect(() => {
        fetchCategories();
    }, [])

    function fetchCategories() {
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setCategories(categories);
            })
        })
    }

    async function handleCategorySubmit(ev) {
        ev.preventDefault();
        const creationPromise = new Promise(async (resolve, reject) => {
            const data = { name: categoryName };

            if (editedCategory) {
                data._id = editedCategory._id;
            }
            const response = await fetch('/api/categories', {
                method: editedCategory ? 'PUT' : 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),

            });

            setCategoryName('');
            fetchCategories();
            setEditedCategory(null);

            if (response.ok) resolve()
            else reject();

       
            });
            await toast.promise(creationPromise, {
                loading: editedCategory ? 'updating category...' : 'creating your new category...',
                success: editedCategory ? 'category updated' : 'category created!',
                error: 'Something went wrong'


        });

    };

    async function handleDeleteClick(_id){
        const promise = new Promise( async (resolve,reject)=>{
            const response = await fetch('/api/categories?_id='+_id,{
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
        
        fetchCategories();
    
    };

    if (profileLoading) {
        return <div className="mt-40 text-center ">loading user info...</div>;
    }

    if (!profileData.admin) {
        return <div className="mt-40 text-center ">Not an admin</div>;
    }
    return (
        <section className="max-w-2xl mx-auto mt-36">
            <UserTabs isAdmin={true} />
            <form className="mt-10 " onSubmit={handleCategorySubmit}>

                <div className="flex items-end gap-2">
                    <div className="grow">
                        <label>{editedCategory ? 'Update Category' : 'New Categories Name'}
                            {editedCategory && (
                                <>
                                    : <b>{editedCategory.name}</b>
                                </>
                            )}
                        </label>
                        <input type="text" value={categoryName} onChange={ev => setCategoryName(ev.target.value)} />
                    </div>
                    <div className="flex gap-2 pb-4">
                        <button className="border border-primary" type="submit">{editedCategory ? 'Update' : 'Create'}</button>
                        <button type="button" onClick={()=>{setEditedCategory(null); setCategoryName('')}}>Cancel</button>
                    </div>

                </div>

            </form>
            <div >
                <h2 className="mt-4 text-sm text-gray-500 ">
                    Existing Categories :
                </h2>
                {categories?.length > 0 && categories.map(c => (
                    <div
                        className="flex items-center gap-1 p-2 px-4 mt-2 mb-1 bg-gray-100 rounded-xl ">
                        <div className=" grow" >{c.name}</div>
                        <div className="flex gap-1" >
                            <button onClick={() => {
                            setEditedCategory(c);
                            setCategoryName(c.name);
                        }} type="button">Edit</button>
                        </div>
                        <div className="flex gap-1" >
                        <DeleteButton label='Delete' onDelete={()=>handleDeleteClick(c._id)}/>
                        </div> 
                    </div>
                ))}
            </div>
        </section>
    )
}

