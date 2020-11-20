import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => {
            if(!cart.cartItems){
                return cart.cartItems = [];
            } else {
                return cart.cartItems;
            }
        }
);
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
);
