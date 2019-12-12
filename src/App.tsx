import React from 'react';
import Product from './components/shoppingList/ShoppingList';
import ShoppintList from './components/shoppingList/ShoppingList';
import FilterComponent from './components/filter/FilterComponent';
import { SortComponent } from './components/sort/SortComponent';
import { HeaderComponent } from './components/header/HeaderComponent';
import { CartOverviewComponent } from './components/cart/CartOverviewComponent';

const App: React.FC = () => {
  return (
    <div className="m-auto antialiased  font-mono text-center">
      <body>
        <CartOverviewComponent />
        <HeaderComponent />
        <div className="flex">
          <FilterComponent />
          <div>
            <SortComponent />
            <ShoppintList></ShoppintList>
          </div>

        </div>
      </body>
    </div >
  );
}

export default App;
