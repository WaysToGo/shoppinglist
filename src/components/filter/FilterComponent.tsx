import React, { useState } from 'react'
import { Props } from '../../App'


export const FilterComponent: React.FC<Props> = (props) => {

    const [filterValue, updateFilterValue] = useState(100)

    const handleApply = () => {
        const newStore = { ...props.store };
        newStore.filterBy = filterValue
        props.setStore({
            ...newStore
        })
    }

    return (
        <div className="h-full w-1/5 hidden sm:block">
            <div>
                <div className="font-bold my-5">Filters</div>
                <div>
                    <div>
                        <span className="pr-1">₹100</span>
                        <span className="pl-20">₹10000</span>
                    </div>
                    <input type="range" name="points" min="100" max="10000" className="bg-green-500" onChange={(e: any) => { updateFilterValue(e.target.value) }} value={filterValue} />

                </div>
                <button className="my-5 inline-block px-5 py-3 rounded-lg shadow-lg bg-blue-700 text-sm text-white uppercase tracking-wider font-semibold sm:text-base" onClick={handleApply}>Apply</button>
            </div>
        </div>
    )
}
