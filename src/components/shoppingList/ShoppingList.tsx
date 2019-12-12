import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Props, Sort } from '../../App';

export interface Products {
    category: string
    discount: number
    id: number
    img_url: string
    name: string
    price: number
    afterDiscount: number
    quantity: number
}
export interface CartProducts extends Products {
    quantity: number;
}
export const calculateDiscount = (price: number, discount: number) => {
    const discountPrice = price * discount / 100
    const fixedValue = parseFloat(discountPrice.toString()).toFixed(2);

    return price - parseFloat(fixedValue);
}
const ShoppintList: React.FC<Props> = (props) => {

    const [data, setData] = useState<Array<Products>>([]);
    const [actualData, setActualData] = useState<Array<Products>>([]);
    const [isLoading, updateLoading] = useState(false)

    const productFilterUtility: any = () => {
        const filteredData = actualData.filter(a => {
            return a.name.toLowerCase().includes(props.store.searchBy) && a.afterDiscount > props.store.filterBy
        })

        switch (props.store.sortBy) {
            case Sort.NONE:
                return filteredData;
            case Sort.DISCOUNT:
                return filteredData.sort(function (a, b) { return b.discount - a.discount })
            case Sort.HIGH:
                return filteredData.sort(function (a, b) { return b.afterDiscount - a.afterDiscount })
            case Sort.LOW:
                return filteredData.sort(function (a, b) { return a.afterDiscount - b.afterDiscount })
            default:
                break;
        }
    }

    useEffect(() => {
        updateLoading(true)
        async function getProducts() {

            const response = await fetch(
                'https://api.myjson.com/bins/qzuzi',
            );
            let result: Array<Products> = await response.json();
            const addDiscount = result.map(a => {
                a.afterDiscount = calculateDiscount(a.price, a.discount)
                a.quantity = 1
                return a
            })
            setActualData(addDiscount);
            setData(addDiscount)
            updateLoading(false)
        }
        getProducts();

    }, []);

    useEffect(() => {
        setData(productFilterUtility())
    }, [props.store])

    return (
        <div className="container  flex flex-wrap ">
            {data.map((product: Products) => {
                return <div className="w-full sm:w-1/2 lg:w-1/4"><Product  {...product} setStore={props.setStore} store={props.store} /></div>
            })}
            {!data.length && !isLoading &&
                <div className="flex justify-center items-center font-bold text-gray-700  h-screen w-full">
                    No Products Available
                </div>}
            {isLoading &&
                <div className="flex justify-center items-center font-bold text-gray-700  h-screen w-full">
                    Products are on there way...
                </div>}
        </div>
    );
}

export default ShoppintList;
