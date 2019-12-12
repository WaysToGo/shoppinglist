import React from 'react'
import { Props, Sort } from '../../App'



export const SortComponent: React.FC<Props> = (props) => {
    const handleClick = (sortBy: Sort) => {
        const newStore = { ...props.store };
        newStore.sortBy = sortBy
        props.setStore({
            ...newStore
        })
    }
    return (
        <div className=" items-center h-20 hidden sm:flex">
            <span className="font-extrabold p-12">Sort BY</span>
            <span className={`text-gray-500 p-6 font-bold  cursor-pointer ${props.store.sortBy == Sort.HIGH ? "text-blue-500 underline" : ""}`} onClick={() => handleClick(Sort.HIGH)}>Price--High Low</span>
            <span className={`text-gray-500 font-bold p-6 cursor-pointer ${props.store.sortBy == Sort.LOW ? "text-blue-500 underline" : ""}`} onClick={() => handleClick(Sort.LOW)}>Price--Low High</span>
            <span className={`text-gray-500 font-bold p-6 cursor-pointer ${props.store.sortBy == Sort.DISCOUNT ? "text-blue-500 underline" : ""}`} onClick={() => handleClick(Sort.DISCOUNT)}>Discount</span>
        </div>
    )
}
