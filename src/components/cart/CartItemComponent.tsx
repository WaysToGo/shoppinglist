import React from 'react'
import image from "../shoppingList/download.jpeg"
import { Props } from '../../App'
import { handleAddProduct, handleRemoveOneProduct, handleRemoveProduct } from '../shoppingList/Product'


export const CartItemComponent: React.FC<Props> = (props) => {

    return (
        <>
            {props.store.cartItems.map(product => {
                return (product && <div className="flex justify-between items-center border-black border-2 h-40">
                    <div className="sm:ml-6 sm">
                        <div className="sm:px-3 sm:py-6 ">
                            <div className="xl:max-w-lg xl:ml-auto flex  items-center ml-4">
                                <img className="rounded-lg shadow-xl w-24 sm:object-cover sm:object-center" src={product.img_url} />
                                <div>
                                    <div className="pb-2">
                                        {product.name}
                                    </div>
                                    <div>
                                        <span className="px-2 font-bold ">₹{product.afterDiscount}</span>
                                        <span className="px-2 font-bold text-gray-600 line-through">{product.price}</span>
                                        <span className="text-green-500 font-bold">{product.discount}% off</span>
                                    </div>
                                    <div className="sm:hidden mt-3">
                                        <span className="inline-block h-8 text-xl rounded-full w-8 border-2 top-0 border-dashed border-gray-700 cursor-pointer"
                                            onClick={(e) => handleRemoveOneProduct(e, product, props.store, props.setStore)} >-</span>
                                        <span className="p-4 font-bold">| {product.quantity}</span>
                                        <span className="inline-block h-8 text-xl rounded-full w-8 border-2 top-0 border-dashed border-gray-700 cursor-pointer" onClick={(e) => handleAddProduct(e, product, props.store, props.setStore)}>+</span>
                                    </div>
                                    <button className=" sm:hidden uppercase text-red-500 border-red-500  p-1 mr-3 mt-3  font-bold"
                                        onClick={(e) => handleRemoveProduct(e, product, props.store, props.setStore)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <span className="inline-block h-8 text-xl rounded-full w-8 border-2 top-0 border-dashed border-gray-700 cursor-pointer"
                            onClick={(e) => handleRemoveOneProduct(e, product, props.store, props.setStore)} >-</span>
                        <span className="p-4 font-bold">| {product.quantity}</span>
                        <span className="inline-block h-8 text-xl rounded-full w-8 border-2 top-0 border-dashed border-gray-700 cursor-pointer" onClick={(e) => handleAddProduct(e, product, props.store, props.setStore)} >+</span>
                    </div>
                    <button className="hidden sm:block uppercase text-red-500 border-red-500 border-2 p-2 mr-6 font-bold" onClick={(e) => handleRemoveProduct(e, product, props.store, props.setStore)}>Remove</button>
                </div>)
            })}

        </>
    )
}
