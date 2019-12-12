import React from 'react'
import { CartItemComponent } from './CartItemComponent'
import { PriceDetailsComponent } from './PriceDetailsComponent'

interface Props {

}

export const CartOverviewComponent: React.FC<Props> = () => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="lg:w-2/3  m-2">
                <CartItemComponent />
            </div>
            <div className="lg:w-1/3 m-2 " >
                <PriceDetailsComponent />
            </div>
        </div>
    )
}
