import React from 'react';
import { Products, CartProducts } from './ShoppingList';
import image from "./download.jpeg"


export const handleAddProduct = (e: any, product: Products, store: any, setStore: any) => {
    e.preventDefault();
    const newStore = { ...store };
    const productInCart = newStore.cartItems.find((a: CartProducts) => {
        return a.id == product.id
    })
    if (productInCart) {
        const updatedCart = newStore.cartItems.map((a: CartProducts) => {

            if (product.id === a.id) {
                var clone = Object.assign({}, a);
                clone.quantity = a.quantity + 1;
                return clone;
            }
            return a;
        })
        newStore.cartItems = updatedCart
    }
    else {
        newStore.cartItems.push(product)
    }

    setStore({
        ...newStore
    })
}

export const handleRemoveOneProduct = (e: any, product: Products, store: any, setStore: any) => {
    e.preventDefault();
    const newStore = { ...store };
    const productInCart = newStore.cartItems.find((a: CartProducts) => {
        return a.id == product.id
    })
    if (productInCart) {
        const updatedCart = newStore.cartItems.map((a: CartProducts) => {

            if (product.id === a.id) {
                var clone = Object.assign({}, a);
                if (a.quantity > 1) {
                    clone.quantity = a.quantity - 1;
                }
                else {
                    return false
                }

                return clone;
            }
            return a;
        })
        newStore.cartItems = updatedCart
    }
    else {
        newStore.cartItems.push(product)
    }

    setStore({
        ...newStore
    })
}

export const handleRemoveProduct = (e: any, product: Products, store: any, setStore: any) => {
    e.preventDefault();
    const newStore = { ...store };
    const productInCart = newStore.cartItems.find((a: CartProducts) => {
        return a.id == product.id
    })
    if (productInCart) {
        const updatedCart = newStore.cartItems.map((a: CartProducts) => {

            if (product.id === a.id) {
                return false
            }
            return a;
        })
        newStore.cartItems = updatedCart
    }
    else {
        newStore.cartItems.push(product)
    }

    setStore({
        ...newStore
    })
}


const Product = (props: any) => {
    const { price, img_url, discount, name, afterDiscount } = props;

    return (
        <div>
            <div className="px-8 py-6 border-gray-100 border ">
                <div className="xl:max-w-lg xl:ml-auto">
                    <img className="mt-6 rounded-lg shadow-xl sm:mt-8 w-full sm:w-full sm:object-cover sm:object-center min-h-full h-56" src={img_url} />
                    <div className="pb-2 mt-4">
                        {name}
                    </div>
                    <div>
                        <span className="px-2 font-bold ">₹{afterDiscount}</span>
                        <span className="px-2 font-bold text-gray-600 line-through">{price}</span>
                        <span className="text-green-500 font-bold">{discount}% off</span>
                    </div>
                    <div className="mt-4 sm:mt-6">
                        <a className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base cursor-pointer" onClick={(e) => { handleAddProduct(e, props, props.store, props.setStore) }}>Add to cart</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Product;
