import React, { useState } from 'react';
import Product, { Products, CartProducts } from './components/shoppingList/ShoppingList';
import ShoppintList from './components/shoppingList/ShoppingList';
import { FilterComponent } from './components/filter/FilterComponent';
import { SortComponent } from './components/sort/SortComponent';
import { HeaderComponent } from './components/header/HeaderComponent';
import { CartOverviewComponent } from './components/cart/CartOverviewComponent';
export enum Sort {
  HIGH = "high",
  LOW = "low",
  DISCOUNT = "discount",
  NONE = "none"
}
export interface CentralStore {
  filterBy: number,
  sortBy: Sort,
  searchBy: string,
  cartItems: Array<CartProducts>
  showCheckout: boolean
}

export interface Props {
  store: CentralStore,
  setStore: any
}

const App: React.FC = () => {
  const [store, setStore] = useState<CentralStore>({
    filterBy: 100,
    sortBy: Sort.NONE,
    searchBy: "",
    cartItems: [],
    showCheckout: false,//later move this to route based
  })
  return (
    <div className="m-auto antialiased  font-mono text-center">
      <body>
        <HeaderComponent store={store} setStore={setStore} />
        {store.showCheckout && <CartOverviewComponent store={store} setStore={setStore} />}
        {!store.showCheckout && <div className="flex">
          <FilterComponent store={store} setStore={setStore} />
          <div>
            <SortComponent store={store} setStore={setStore} />
            <ShoppintList store={store} setStore={setStore} />
          </div>

        </div>}
      </body>
    </div >
  );
}

export default App;
