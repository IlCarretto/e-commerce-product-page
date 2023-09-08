import React, { useEffect, useReducer } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/index.scss";
import Header from './components/Header';
import ProductImages from './components/ProductImages';
import Product from './components/Product';
import { cartReducer } from './reducer/useCartReducer';

function App() {

  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <div className="App">
      <Header dispatch={dispatch} state={state}/>
      <div className="container p-0">
        <main>
            <ProductImages/>
            <Product dispatch={dispatch}/>
        </main>
      </div>
    </div>
  );
}

export default App;
