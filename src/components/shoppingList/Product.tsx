import React from 'react';
import { Products } from './ShoppingList';
import image from "./download.jpeg"

const calculateDiscount = (price: number, discount: number) => {
    const discountPrice = price * discount / 100
    const fixedValue = parseFloat(discountPrice.toString()).toFixed(2);

    return price - parseFloat(fixedValue);
}
const Product = (props: Products) => {
    const { price, img_url, discount, name } = props;
    return (
        <div>
            <div className="px-8 py-6 border-gray-100 border ">
                <div className="xl:max-w-lg xl:ml-auto">
                    <img className="mt-6 rounded-lg shadow-xl sm:mt-8  sm:w-full sm:object-cover sm:object-center" src={image} />
                    <div className="pb-2">
                        {name}
                    </div>
                    <div>
                        <span className="px-2 font-bold ">₹{calculateDiscount(price, discount)}</span>
                        <span className="px-2 font-bold text-gray-600 line-through">{price}</span>
                        <span className="text-green-500 font-bold">{discount}% off</span>
                    </div>
                    <div className="mt-4 sm:mt-6">
                        <a href="#" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base">Add to cart</a>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Product;
