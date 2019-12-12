import React from 'react'

export default function FilterComponent() {
    return (
        <div className="h-full w-1/5 hidden sm:block">
            <div>
                <div className="font-bold my-5">Filters</div>
                <div>
                    <div>
                        <span className="pr-1">₹100</span>
                        <span className="pl-20">₹10000</span>
                    </div>
                    <input type="range" name="points" min="0" max="10000" className="bg-green-500" />

                </div>
                <button className="my-5 inline-block px-5 py-3 rounded-lg shadow-lg bg-blue-700 text-sm text-white uppercase tracking-wider font-semibold sm:text-base">Apply</button>
            </div>
        </div>
    )
}
