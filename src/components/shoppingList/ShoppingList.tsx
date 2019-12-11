import React, { useEffect, useState } from 'react';
import Product from './Product';

export interface Products {
    category: string
    discount: number
    id: number
    img_url: string
    name: string
    price: number
}

const ShoppintList: React.FC = () => {
    const [data, setData] = useState<Array<Products>>([]);
    useEffect(() => {
        async function getProducts() {

            const response = await fetch(
                'https://api.myjson.com/bins/qzuzi',
            );
            const result: Array<Products> = await response.json();
            setData(result);
        }
        getProducts();

    }, []);
    console.log(data)
    return (
        <div className="container  flex flex-wrap ">
            {data.map((product: Products) => {
                return <div className="sm:w-1/2 lg:w-1/4"><Product  {...product} /></div>
            })}

        </div>
    );
}

export default ShoppintList;
