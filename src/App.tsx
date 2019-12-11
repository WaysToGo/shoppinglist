import React from 'react';
import Product from './components/product/Product';

const App: React.FC = () => {
  return (
    <div className="m-auto antialiased font-sans font-serif font-mono text-center">
      <header className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white text-2xl">

        Learn Taiwlind with React TypeScript hi

      </header>
      <body>
        <Product></Product>
      </body>
    </div>
  );
}

export default App;
