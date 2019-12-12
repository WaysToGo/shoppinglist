import React from 'react'

interface Props {

}

export const CartComponent: React.FC<Props> = () => {
    return (
        <div className="self-center pr-5 pl-2 ">
            <i className="text-white  fill-current ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M17 16a3 3 0 1 1-2.83 2H9.83a3 3 0 1 1-5.62-.1A3 3 0 0 1 5 12V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v1h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H5a1 1 0 0 0 0 2h12zM7 12h9.38l3-6H7v6zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>
                <i className="absolute h-4 text-xs rounded-full w-4 bg-red-600 top-0 bottom-auto">1</i>
            </i>
        </div>
    )
}
