
'use client'
import { useState } from "react"

export default function DeleteButton({ label, onDelete }) {


    const [showConfirm, setShowConfirm] = useState(false)


    if (showConfirm) {
        return (
            <div className="fixed inset-0 flex items-center justify-center h-full bg-black/80">
                <div className="p-4 bg-white rounded-lg ">
                    <div>
                        Are you sure?  You want to delete it !
                    </div>
                    <div className="flex gap-2 mt-1">
                        <button onClick={() => setShowConfirm(false)} type="button">Cancel</button>
                        <button onClick={onDelete} className="text-white bg-primary primary" type="button">Yes,&nbsp;Delete!</button>
                    </div>
                </div>
            </div>


        )
    }

    return (

        <button onClick={() => setShowConfirm(true)} type="button">
            {label}
        </button>
    )
}