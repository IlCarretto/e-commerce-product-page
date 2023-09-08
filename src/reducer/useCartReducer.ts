import { ICartItem } from "../types/cartType";

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export type CartAction = 
| { type: typeof ADD_ITEM; payload: ICartItem }
| { type: typeof REMOVE_ITEM; payload: null};

export const cartReducer = (state: ICartItem[], action: CartAction): ICartItem[] => {
    const { payload, type } = action;
    switch (type) {
        case ADD_ITEM:
            let cart = [...state];
            cart.push(payload);
            return cart;
        case REMOVE_ITEM:
            return [...state].slice(0, -1);
        default: 
            return state;
    }
}