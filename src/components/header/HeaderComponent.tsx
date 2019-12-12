import React from 'react'
import logo from "../../logo.svg"
import { SearchComponent } from '../Search/SearchComponent'
import { CartComponent } from '../cart/CartComponent'
import { Props } from '../../App'


export const HeaderComponent: React.FC<Props> = (props) => {
    const { store, setStore } = props;

    const handleIconClick = () => {
        const newStore = { ...props.store };
        newStore.showCheckout = false;
        props.setStore({
            ...newStore
        })
    }
    return (
        <div>
            <nav className="h-16 bg-blue-700 flex justify-between w-full">
                <img src={logo} className="w-12 ml-5 cursor-pointer" alt="logo" onClick={handleIconClick} />

                <div className="flex self-center relative">
                    <SearchComponent store={store} setStore={setStore} />
                    <CartComponent store={store} setStore={setStore} />
                </div>
            </nav>

        </div>
    )
}
