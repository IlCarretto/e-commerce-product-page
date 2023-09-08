import React, {useState, useEffect, useRef} from 'react'
import "./index.scss";
import { CartAction, REMOVE_ITEM } from '../../reducer/useCartReducer';
import { ICartItem } from '../../types/cartType';
import { getFullPrice } from '../../utilities/getFullPrice';

interface IProps {
    state: ICartItem[];
    dispatch: React.Dispatch<CartAction>
}

const Header = ({dispatch, state}: IProps) => {
    const links = ["Collections", "Men", "Women", "About", "Contact"];

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef<HTMLDivElement>(null);


    const handleClickAway = (e: MouseEvent) => {
        if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
            setIsCartOpen(false);
        }
    }

    useEffect(() => {
        if (isCartOpen) {
            document.addEventListener('click', handleClickAway);
        } else {
            document.removeEventListener('click', handleClickAway);
        }

        return () => {
            document.removeEventListener('click', handleClickAway);
        }

    }, [isCartOpen])


    const handleRemoveItem = () => {
        dispatch({type: REMOVE_ITEM, payload: null})
    }

  return (
    <div className="container">
        <header className="header">
            <div className="header-left">
                <button className='btn-menu' onClick={() => setIsMenuOpen(true)}>
                    <img src="icon-menu.svg" alt="Hamb Menu Icon"/>
                </button>
                <img src="logo.svg" alt="Sneakers Logo"/>
                <nav className={isMenuOpen ? 'active-menu' : ''}>
                    <button className='btn-closem' onClick={() => setIsMenuOpen(false)}>
                        <img src="icon-close.svg" alt="Icon Close Menu"/>
                    </button>
                    <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <div className='cart-container'>
                    <div className='cart-icon'>
                        <img onClick={(e) => {e.stopPropagation(); setIsCartOpen(!isCartOpen)}} src="icon-cart.svg" alt="Cart"/>
                        <span>{state.length}</span>
                    </div>
                    {isCartOpen && (
                    <div ref={cartRef} className="cart">
                        <div className="header-cart">
                            <h5>Cart</h5>
                        </div>
                        <div className="body-cart">
                        {state.length > 0 ? (
                            <>
                            <div className='full-cart'>
                                <img src="image-product-1-thumbnail.jpg" alt="Image Product Cart" />
                                <div>
                                    <p>{state[0].name}</p>
                                    <span>${state[0].price?.toFixed(2)} x {state.length}</span>
                                    <span className='ms-2'>${state[0].price && getFullPrice(state[0].price, state.length).toFixed(2)}</span>
                                </div>
                                <button onClick={handleRemoveItem}>
                                    <img src="icon-delete.svg" alt="Icon Delete Item" />
                                </button>
                            </div>
                            <button className='btn-add'>Checkout</button>
                            </>
                        ) : (
                            <div className='empty-cart'><span>Your cart is empty.</span></div>
                        )}
                        </div>
                    </div>
                    )}
                </div>
                <div style={{marginLeft: '1rem'}} className="propic">
                    <img src="image-avatar.png" alt="Profile Pic" />
                </div>
            </div>
            {isMenuOpen && (
            <div onClick={() => setIsMenuOpen(false)} className="overlay">
            </div>
            )}
        </header>
    </div>
  )
}

export default Header