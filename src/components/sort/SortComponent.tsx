import React from 'react'

interface Props {

}

export const SortComponent: React.FC<Props> = () => {
    return (
        <div className=" items-center h-20 hidden sm:flex">
            <span className="font-extrabold p-12">Sort BY</span>
            <span className="text-gray-500 p-6 font-bold text-blue-500 underline">Price--High Low</span>
            <span className="text-gray-500 font-bold p-6">Price--Low High</span>
            <span className="text-gray-500 font-bold p-6">Discount</span>
        </div>
    )
}
