import React from 'react'
import logo from "../../logo.svg"
import { SearchComponent } from '../Search/SearchComponent'

interface Props {

}

export const HeaderComponent: React.FC<Props> = () => {
    return (
        <div>
            <nav className="h-16 bg-blue-700 flex justify-between ">
                <img src={logo} className="App-logo " alt="logo" />
                <SearchComponent />

            </nav>

        </div>
    )
}
