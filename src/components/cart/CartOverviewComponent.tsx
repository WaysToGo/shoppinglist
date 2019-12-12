import React from 'react'
import { CartItemComponent } from './CartItemComponent'
import { PriceDetailsComponent } from './PriceDetailsComponent'
import { Props } from '../../App'


export const CartOverviewComponent: React.FC<Props> = (props) => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="lg:w-2/3  m-2">
                <CartItemComponent setStore={props.setStore} store={props.store} />
            </div>
            <div className="lg:w-1/3 m-2 " >
                <PriceDetailsComponent setStore={props.setStore} store={props.store} />
            </div>
        </div>
    )
}
