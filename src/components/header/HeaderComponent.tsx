import React from 'react'
import logo from "../../logo.svg"
import { SearchComponent } from '../Search/SearchComponent'
import { CartComponent } from '../cart/CartComponent'

interface Props {

}

export const HeaderComponent: React.FC<Props> = () => {
    return (
        <div>
            <nav className="h-16 bg-blue-700 flex justify-between w-full">
                <img src={logo} className="w-12 ml-5" alt="logo" />

                <div className="flex self-center relative">
                    <SearchComponent />
                    <CartComponent />
                </div>
            </nav>

        </div>
    )
}
