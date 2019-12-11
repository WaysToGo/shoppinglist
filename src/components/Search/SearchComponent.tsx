import React from 'react'

interface Props {

}

export const SearchComponent: React.FC<Props> = () => {
    return (
        <div className="self-center">
            <div className="flex">
                <input className="w-full p-2 bg-transparent text-white placeholder-white border-b-2 border-white" type="text" placeholder="Search" />
                <button className="w-auto flex justify-end items-center text-blue p-2 hover:text-blue-light">
                    <i className="text-white absolute fill-current ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </i>
                </button>
            </div>
        </div>
    )
}
