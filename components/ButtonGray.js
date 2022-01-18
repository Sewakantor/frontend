import React from 'react'

export default function ButtonGray({children}) {
    return (
        <button className="border px-7 py-3 rounded-md bg-[#C4C4C4] font-bold">
            {children}
        </button>
    )
}
