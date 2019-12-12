import React from 'react'

interface Props {

}

export const PriceDetailsComponent: React.FC<Props> = () => {
    return (
        <div>
            <div className="border-black border-2">
                <div className="font-bold text-gray-600 m-4">Price Details</div>
                <div className="border-gray-300 border-2"></div>
                <div >
                    <div className="m-3">
                        <span className="inline-block w-1/4">Price </span>
                        <span className="inline-block w-1/4">900</span>
                    </div>

                    <div className="m-3">
                        <span className="inline-block w-1/4">Discount </span>
                        <span className="inline-block w-1/4">900</span>
                    </div>
                    <div className="font-bold m-5">
                        <span className="inline-block w-1/4">Total Payable  </span>
                        <span className="inline-block w-1/4">900</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
