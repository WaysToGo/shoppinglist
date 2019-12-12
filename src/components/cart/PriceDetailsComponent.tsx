import React, { useEffect, useState } from 'react'
import { Props } from '../../App'



export const PriceDetailsComponent: React.FC<Props> = (props) => {

    const getPrice = () => {
        return props.store.cartItems.reduce((a, v) => {
            if (v) {
                a += v.price * v.quantity;
            }
            return a;
        }, 0)
    }
    const getDiscount = () => {
        return props.store.cartItems.reduce((a, v) => {
            if (v) {
                a += (v.price - v.afterDiscount) * v.quantity;
            }
            return a;
        }, 0)
    }
    const getTotal = () => {
        return props.store.cartItems.reduce((a, v) => {
            if (v) {
                a += v.afterDiscount * v.quantity;
            }
            return a;
        }, 0)
    }

    return (
        <div>
            <div className="border-black border-2">
                <div className="font-bold text-gray-600 m-4">Price Details</div>
                <div className="border-gray-300 border-2"></div>
                <div >
                    <div className="m-3">
                        <span className="inline-block w-1/4">Price </span>
                        <span className="inline-block w-1/4">{getPrice()}</span>
                    </div>

                    <div className="m-3">
                        <span className="inline-block w-1/4">Discount </span>
                        <span className="inline-block w-1/4">{getDiscount()}</span>
                    </div>
                    <div className="font-bold m-5">
                        <span className="inline-block w-1/4">Total Payable  </span>
                        <span className="inline-block w-1/4">{getTotal()}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
