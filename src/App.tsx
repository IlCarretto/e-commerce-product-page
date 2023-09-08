import React, { useReducer, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/index.scss";
import Header from './components/Header';
import ProductImages from './components/ProductImages';
import Product from './components/Product';
import { cartReducer } from './reducer/useCartReducer';

function App() {

  const [state, dispatch] = useReducer(cartReducer, []);
  const [isLightboxActive, setIsLightboxActive] = useState(false);

  return (
    <div className="App">
      <Header dispatch={dispatch} state={state}/>
      <div className="container p-0">
        <main>
            <ProductImages openLightbox={() => setIsLightboxActive(true)}/>
            <Product dispatch={dispatch}/>
        </main>
        {isLightboxActive && (
          <div className='ms-modal d-none d-lg-block'>
            <div className="modal-image">
              <div className="d-flex justify-content-end">
                <img className='btn-close-modal' onClick={() => setIsLightboxActive(false)} src="icon-close.svg" alt="Icon Close Modal"/>
              </div>
              <ProductImages/>
            </div>
            <div className={`modal-overlay ${isLightboxActive ? 'modal-active' : ''}`}></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
