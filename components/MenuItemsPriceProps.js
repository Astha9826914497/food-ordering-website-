
'use client'
import { useEffect, useState } from "react";
import Bin from '../../src/components/icons/bin'
import Down from "./icons/Down";
import Up from "./icons/Up";

export default function MenuItemsPriceProps({ addLabel, name, props, setProps }) {


    const [isOpen, setIsOpen] = useState(false);

    function addSize() {
        setProps(oldProps => {
            return [...oldProps, { name: '', price: 0 }];
        })
    }

    function editProp(ev, index, prop) {
        const newValue = ev.target.value
        setProps(prevSizes => {
            const newSizes = [...prevSizes];
            newSizes[index][prop] = newValue;
            return newSizes;
        })
    }

    function removeProp(indexToRemove) {
        setProps(prev => prev.filter((v, index) => index !== indexToRemove))
    }
    return (
        <div className="p-2 mb-2 bg-gray-200 rounded-md">

            <button onClick={()=>setIsOpen(prev=>!prev)} type="button" className="inline-flex justify-start gap-4 p-1 border-0">
                {isOpen && (
                    <Up />
                )}

                {!isOpen && (
                    <Down/>
                )}

                <h3>{name} </h3>
                <span>({props?.length})</span>
            </button>


<div className={isOpen ? 'block' : 'hidden'}>
{props?.length > 0 && props.map((size, index) => (
                <div className="flex items-end gap-4">
                    <div>
                        <label>Size Name</label>
                        <input onChange={ev => editProp(ev, index, 'name')} type="text" placeholder="Size Name" value={size.name} />
                    </div>
                    <div>
                        <label>Extra Price</label>
                        <input onChange={ev => editProp(ev, index, 'price')} type="text" placeholder="Extra price" value={size.price} />
                    </div>
                    <div>
                        <button onClick={() => removeProp(index)} type="button" className="p-3 mb-4 bg-white "><Bin /></button>
                    </div>
                </div>
            ))}
            <button type="button" onClick={addSize} className="bg-white">{addLabel}</button>
</div>
           
        </div>
    )
}