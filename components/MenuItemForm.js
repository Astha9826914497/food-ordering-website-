'use client'
import EditableImage from "@/components/EditableImage";
import { useEffect, useState } from "react";
import './page.css';
import MenuItemsPriceProps from "./MenuItemsPriceProps";
import Categories from "../../src/app/categories/page";
import { Select } from "@mui/material";
import DeleteButton from "./DeleteButton";

export default function MenuItemForm({ onSubmit, menuItem }) {

    const [image, setImage] = useState(menuItem?.image || '');
    const [name, setName] = useState(menuItem?.name || '');
    const [description, setDescription] = useState(menuItem?.description || '');
    const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
    const [sizes, setSizes] = useState(menuItem?.sizes ||[]);
    const [extraIngredientPrices, setExtraIngredientPrices] = useState(menuItem?.extraIngredientPrices || []);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(menuItem?.category || '');


    useEffect(()=>{
        fetch('/api/categories').then(res=>{
            res.json().then(categories=>{
                setCategories(categories);
            })
        })
    },[])
    

    return (

        <form onSubmit={ev => onSubmit(ev, { image, name, description, basePrice,sizes,extraIngredientPrices,category, })} className='max-w-md mx-auto mt-8'>
            <div className='grid items-start gap-4 ' style={{ gridTemplateColumns: '.3fr .7fr' }}>
                <div >
                    <EditableImage link={image} setLink={setImage} />
                </div>
                <div className=' grow'>
                    <label>Menu Item Name</label>
                    <input type='text' style={{ "margin-top": '-2px' }} value={name} onChange={ev => setName(ev.target.value)} />
                    <label>Description</label>
                    <input type='text' style={{ "margin-top": '-2px' }} value={description} onChange={ev => setDescription(ev.target.value)} />
                    <label>Category</label>
                    <select value={category} onChange={ev=>setCategory(ev.target.value)}>{categories?.length >0 && categories.map(c=>(
                        <option value={c._id}>{c.name}</option>
                    ))}</select> 
                    <label>Base Price</label>
                    <input type='text' style={{ "margin-top": '-2px' }} value={basePrice} onChange={ev => setBasePrice(ev.target.value)} />
                    <MenuItemsPriceProps addLabel={'+  Add Size (Medium,large)'} name={'Sizes'} props = {sizes} setProps ={setSizes} />
                    <MenuItemsPriceProps name={'Extra Ingredients'} addLabel={'Add Ingredients Prices'} props={extraIngredientPrices} setProps={setExtraIngredientPrices}/>
                    <button className='mt-8' type='submit'>Save</button>

                </div>
            </div>
        </form>
    )
}
