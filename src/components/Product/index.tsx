import React, { useState } from 'react'
import "./index.scss";
import { ADD_ITEM, CartAction } from '../../reducer/useCartReducer';

interface IProps {
  dispatch: React.Dispatch<CartAction>
}

const Product = ({dispatch}: IProps) => {

  const item = {
    name: "Fall Limited Edition Sneakers",
    price: 125.00
  }

  const [itemNum, setItemNum] = useState(1);

  const handleAddItem = (items: number) => {
    for (let i = 0; i < items; i++) {
      dispatch({type: ADD_ITEM, payload: item});
      setItemNum(1);
    }
  }

  return (
    <div className="product">
      <h5 className='product-brand'>Sneaker Company</h5>
      <h1 className='product-title'>{item.name}</h1>
      <p className='product-desc'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
      <div className='product-price'>
        <span>${item.price}</span>
      </div>
      <div className="ms-btn-group d-sm-flex">
          <div className="counter">
              <button onClick={() => setItemNum((prev) => prev - 1)}>
                  <img src="icon-minus.svg" alt="Icon Minus" />
              </button>
              <div className="text-center fw-bold">{itemNum}</div>
              <button onClick={() => setItemNum((prev) => prev + 1)}>
                  <img src="icon-plus.svg" alt="Icon Plus" />
              </button>
          </div>
          <button onClick={() => handleAddItem(itemNum)} className='btn btn-add mt-3 mt-sm-0'>
            <img src="icon-cart.svg" alt="Icon Cart" className='icon-cart-white'/>
            <span>Add to cart</span>
          </button>
      </div>
    </div>
  )
}

export default Product